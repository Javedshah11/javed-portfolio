import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { RESUME_ANALYZER_API_URL, analyzeResume } from '../../utils/resumeAnalyzerApi'

const sampleResult = {
  ats_score: 85,
  technical_skills_score: 82,
  project_score: 88,
  overall_resume_score: 86,
  name: 'Javed Shah',
  skills: ['React', 'Node.js', 'MongoDB'],
  education: 'Detected',
  experience: 'Detected',
  technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  missing_skills: ['Docker', 'AWS'],
  resume_improvements: ['Add more project metrics', 'Include deployment experience'],
  suggested_technologies: ['Docker', 'AWS', 'TypeScript', 'Testing'],
  career_recommendations: [
    'Apply for full stack internships and junior MERN roles.',
    'Add GitHub README files with setup and screenshots.',
  ],
  recommendations: ['Add more project metrics', 'Include deployment experience'],
}

function ScoreCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5">
      <div className="flex items-end justify-between gap-3">
        <p className="text-sm font-bold text-slate-300">{label}</p>
        <p className="text-3xl font-black text-white">{value}</p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
        />
      </div>
    </div>
  )
}

function TagList({ title, items, color = 'cyan' }) {
  const colorClass =
    color === 'rose'
      ? 'border-rose-300/20 bg-rose-300/10 text-rose-100'
      : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <h3 className="font-black text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items?.length ? (
          items.map((item) => (
            <span key={item} className={`rounded-full border px-3 py-1 text-xs font-bold ${colorClass}`}>
              {item}
            </span>
          ))
        ) : (
          <span className="text-sm text-slate-400">No items detected yet.</span>
        )}
      </div>
    </div>
  )
}

export default function AiResumeAnalyzer() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(sampleResult)
  const [status, setStatus] = useState({ type: 'info', message: 'Upload a PDF resume or review the sample dashboard below.' })
  const [loading, setLoading] = useState(false)

  const scoreCards = useMemo(
    () => [
      ['ATS Score', result.ats_score],
      ['Technical Skills', result.technical_skills_score],
      ['Project Score', result.project_score],
      ['Overall Score', result.overall_resume_score],
    ],
    [result],
  )

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0]
    setFile(selected || null)
    setStatus(
      selected
        ? { type: 'info', message: `${selected.name} selected. Ready to analyze.` }
        : { type: 'info', message: 'Upload a PDF resume to begin.' },
    )
  }

  const handleAnalyze = async () => {
    if (!file) {
      setStatus({ type: 'error', message: 'Please upload a PDF resume first.' })
      return
    }

    setLoading(true)
    setStatus({ type: 'info', message: 'Analyzing resume with FastAPI backend...' })

    try {
      const data = await analyzeResume(file)
      setResult(data)
      setStatus({ type: 'success', message: 'Resume analyzed successfully.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-resume-analyzer" className="bg-white/[0.03] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Resume Analyzer"
          title="Python-powered resume scoring dashboard"
          description="Upload a PDF resume, parse key resume details, calculate recruiter-focused scores, and receive practical AI-style improvement suggestions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              Resume Upload
            </p>
            <h3 className="mt-3 text-2xl font-black text-white">Analyze PDF Resume</h3>
            <p className="mt-4 leading-7 text-slate-300">
              The frontend sends the uploaded PDF to a FastAPI endpoint at
              <span className="font-mono text-cyan-200"> /analyze-resume</span>. The
              backend extracts text, detects skills and sections, then returns scores
              and recommendations.
            </p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 font-mono text-xs text-cyan-100">
              API: {RESUME_ANALYZER_API_URL}
            </p>

            <label className="mt-6 grid cursor-pointer place-items-center rounded-3xl border border-dashed border-cyan-300/30 bg-cyan-300/5 px-5 py-10 text-center transition hover:bg-cyan-300/10">
              <input type="file" accept="application/pdf" onChange={handleFileChange} className="sr-only" />
              <span className="text-lg font-black text-white">
                {file ? file.name : 'Choose PDF Resume'}
              </span>
              <span className="mt-2 text-sm text-slate-400">PDF only, processed by Python FastAPI</span>
            </label>

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </button>

            <p
              className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                status.type === 'success'
                  ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200'
                  : status.type === 'error'
                    ? 'border-rose-300/20 bg-rose-300/10 text-rose-200'
                    : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100'
              }`}
            >
              {status.message}
            </p>
          </motion.div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {scoreCards.map(([label, value]) => (
                <ScoreCard key={label} label={label} value={value} />
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <TagList title="Detected Skills" items={result.skills} />
              <TagList title="Missing Skills" items={result.missing_skills} color="rose" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <TagList title="Suggested Technologies" items={result.suggested_technologies} />
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-black text-white">Resume Improvements</h3>
            <div className="mt-4 grid gap-3">
              {result.resume_improvements?.map((item) => (
                <p key={item} className="rounded-xl bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-black text-white">Career Recommendations</h3>
            <div className="mt-4 grid gap-3">
              {result.career_recommendations?.map((item) => (
                <p key={item} className="rounded-xl bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
