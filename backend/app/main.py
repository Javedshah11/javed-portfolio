import os
import re
import tempfile
from collections import Counter
from typing import Dict, List

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

try:
    import pdfplumber
except ImportError:  # pragma: no cover
    pdfplumber = None

try:
    from PyPDF2 import PdfReader
except ImportError:  # pragma: no cover
    PdfReader = None


TECH_SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Firebase",
    "REST APIs",
    "JWT",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Python",
    "FastAPI",
]

RECOMMENDED_SKILLS = ["Docker", "AWS", "TypeScript", "Testing", "CI/CD", "Cloud Deployment"]
SECTION_KEYWORDS = {
    "education": ["education", "university", "degree", "cgpa", "graduated"],
    "experience": ["experience", "internship", "developer", "role", "work"],
    "projects": ["project", "projects", "built", "developed", "dashboard"],
    "contact": ["email", "phone", "linkedin", "github"],
}


app = FastAPI(
    title="AI Resume Analyzer",
    description="FastAPI resume parser and scoring service for Javed Shah portfolio.",
    version="1.0.0",
)

allowed_origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173",
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in allowed_origins if origin.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def extract_pdf_text(file_path: str) -> str:
    if pdfplumber:
        with pdfplumber.open(file_path) as pdf:
            return "\n".join(page.extract_text() or "" for page in pdf.pages)

    if PdfReader:
        reader = PdfReader(file_path)
        return "\n".join(page.extract_text() or "" for page in reader.pages)

    raise HTTPException(status_code=500, detail="PDF parser dependency is not installed.")


def find_name(text: str) -> str:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    for line in lines[:8]:
      if 2 <= len(line.split()) <= 4 and not re.search(r"email|phone|resume|cv", line, re.I):
          return line
    return "Not detected"


def extract_matches(text: str, keywords: List[str]) -> List[str]:
    found = []
    lowered = text.lower()
    for keyword in keywords:
        pattern = keyword.lower().replace(".", r"\.?")
        if re.search(rf"\b{pattern}\b", lowered):
            found.append(keyword)
    return found


def section_score(text: str, keywords: List[str], max_points: int) -> int:
    lowered = text.lower()
    hits = sum(1 for keyword in keywords if keyword in lowered)
    return min(max_points, round((hits / max(1, len(keywords))) * max_points))


def clamp(value: int) -> int:
    return max(0, min(100, value))


def analyze_text(text: str) -> Dict:
    clean_text = re.sub(r"\s+", " ", text).strip()
    skills = extract_matches(clean_text, TECH_SKILLS)
    missing_skills = [skill for skill in RECOMMENDED_SKILLS if skill not in skills]
    words = re.findall(r"[A-Za-z+#.]+", clean_text)
    word_count = len(words)

    ats_score = clamp(
        35
        + section_score(clean_text, SECTION_KEYWORDS["contact"], 15)
        + section_score(clean_text, SECTION_KEYWORDS["education"], 15)
        + section_score(clean_text, SECTION_KEYWORDS["projects"], 20)
        + min(15, len(skills) * 2)
    )
    technical_skills_score = clamp(min(100, len(skills) * 7))
    project_score = clamp(section_score(clean_text, SECTION_KEYWORDS["projects"], 70) + (15 if "metric" in clean_text.lower() else 0))
    overall_resume_score = clamp(round((ats_score * 0.4) + (technical_skills_score * 0.35) + (project_score * 0.25)))

    recommendations = []
    if missing_skills:
        recommendations.append(f"Add relevant missing skills such as {', '.join(missing_skills[:3])}.")
    if "deployed" not in clean_text.lower() and "vercel" not in clean_text.lower():
        recommendations.append("Include deployment experience such as Vercel, Render, or cloud hosting.")
    if not re.search(r"\d+%|\d+\+|improved|reduced|increased", clean_text, re.I):
        recommendations.append("Add more project metrics to show measurable impact.")
    if word_count < 250:
        recommendations.append("Add more detail to projects, responsibilities, and technical outcomes.")
    recommendations.append("Keep the resume ATS-friendly with clear headings and consistent bullet points.")

    suggested_technologies = missing_skills[:4] or ["Docker", "AWS", "Testing", "CI/CD"]
    career_recommendations = [
        "Apply for Full Stack Developer internships and junior MERN roles.",
        "Showcase OpenHouse Connect with screenshots, metrics, and a live demo.",
        "Add GitHub README files that explain problem, solution, and setup steps.",
    ]

    top_terms = Counter(word.lower() for word in words if len(word) > 3).most_common(10)

    return {
        "name": find_name(text),
        "skills": skills,
        "education": "Detected" if section_score(clean_text, SECTION_KEYWORDS["education"], 1) else "Not detected",
        "experience": "Detected" if section_score(clean_text, SECTION_KEYWORDS["experience"], 1) else "Not detected",
        "technologies": skills,
        "ats_score": ats_score,
        "technical_skills_score": technical_skills_score,
        "project_score": project_score,
        "overall_resume_score": overall_resume_score,
        "missing_skills": missing_skills,
        "resume_improvements": recommendations,
        "suggested_technologies": suggested_technologies,
        "career_recommendations": career_recommendations,
        "recommendations": recommendations[:3],
        "keyword_density": [{"term": term, "count": count} for term, count in top_terms],
    }


@app.get("/")
def root():
    return {"status": "ok", "service": "AI Resume Analyzer"}


@app.post("/analyze-resume")
async def analyze_resume(file: UploadFile = File(...)):
    if file.content_type not in {"application/pdf", "application/octet-stream"}:
        raise HTTPException(status_code=400, detail="Please upload a PDF resume.")

    suffix = ".pdf"
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp_file:
        temp_file.write(await file.read())
        temp_path = temp_file.name

    try:
        text = extract_pdf_text(temp_path)
        if not text.strip():
            raise HTTPException(status_code=422, detail="Could not extract text from this PDF.")
        return analyze_text(text)
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
