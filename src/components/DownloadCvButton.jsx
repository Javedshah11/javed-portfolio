import { useState } from 'react'
import { generateCvPdf } from '../utils/generateCvPdf'

export default function DownloadCvButton({ variant = 'primary', className = '', children = 'Download CV' }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const baseClass =
    'inline-flex items-center justify-center rounded-full text-sm font-black transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950'
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
    compact:
      'border border-cyan-300/30 px-4 py-2 text-cyan-100 hover:border-cyan-200 hover:bg-cyan-300/10',
  }

  const handleDownload = async () => {
    setIsGenerating(true)

    try {
      await generateCvPdf()
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isGenerating}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {isGenerating ? 'Generating...' : children}
    </button>
  )
}
