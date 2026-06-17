# AI Resume Analyzer Backend

FastAPI backend for the portfolio AI Resume Analyzer section.

## Local Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API URL:

```text
http://localhost:8000
```

Endpoint:

```text
POST /analyze-resume
```

Form data:

```text
file: PDF resume
```

## Frontend Env

Create `.env` in the React project root:

```bash
VITE_RESUME_ANALYZER_API_URL=http://localhost:8000
```

For Vercel, set `VITE_RESUME_ANALYZER_API_URL` to your Render backend URL.

## Render Deploy

1. Create a new Render Web Service.
2. Set root directory to `backend`.
3. Build command:

```bash
pip install -r requirements.txt
```

4. Start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

5. Add environment variable:

```bash
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,http://localhost:5173
```
