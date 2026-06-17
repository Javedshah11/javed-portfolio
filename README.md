# Javed Shah Portfolio

React + Vite + Tailwind CSS portfolio with Framer Motion, PDF CV generation,
EmailJS contact support, and a Python-powered AI Resume Analyzer.

## Frontend Setup

```bash
npm install
npm run dev
```

Run the FastAPI analyzer in a second terminal:

```bash
npm run backend:install
npm run backend:dev
```

Optional `.env` values:

```bash
VITE_RESUME_ANALYZER_API_URL=http://localhost:8000
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Deploy the frontend to Vercel. In Vercel, set `VITE_RESUME_ANALYZER_API_URL`
to your Render backend URL.

## AI Resume Analyzer Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend endpoint:

```text
POST http://localhost:8000/analyze-resume
```

Send a PDF file as multipart form data using the key `file`.

## Render Backend Deployment

Create a Render Web Service with `backend` as the root directory.

Build command:

```bash
pip install -r requirements.txt
```

Start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Environment variable:

```bash
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,http://localhost:5173
```
