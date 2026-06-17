export const RESUME_ANALYZER_API_URL =
  import.meta.env.VITE_RESUME_ANALYZER_API_URL || 'http://localhost:8000'

export async function analyzeResume(file) {
  const formData = new FormData()
  formData.append('file', file)

  let response

  try {
    response = await fetch(`${RESUME_ANALYZER_API_URL}/analyze-resume`, {
      method: 'POST',
      body: formData,
    })
  } catch {
    throw new Error(
      `Could not connect to FastAPI at ${RESUME_ANALYZER_API_URL}. Start the backend or set VITE_RESUME_ANALYZER_API_URL to your Render API URL.`,
    )
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || 'Resume analysis failed.')
  }

  return response.json()
}
