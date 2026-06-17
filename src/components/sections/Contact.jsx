import { useState } from 'react'
import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { profile } from '../../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  const validate = () => {
    const nextErrors = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(
        form.name,
      )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something professional."
          description="Reach out for full stack development work, MERN stack projects, internships, collaboration, or AI-powered web app ideas."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionCard className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <h3 className="text-2xl font-black text-white">Contact Details</h3>
            <div className="mt-6 grid gap-4 text-slate-300">
              <a href={`mailto:${profile.email}`} className="hover:text-cyan-200">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="hover:text-cyan-200">
                {profile.phone}
              </a>
              <p>{profile.location}</p>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                GitHub: Javedshah11
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                LinkedIn: javed-shah-
              </a>
            </div>
          </MotionCard>

          <MotionCard className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    className={`rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 ${
                      errors.name ? 'border-rose-400' : 'border-white/10'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    className={`rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 ${
                      errors.email ? 'border-rose-400' : 'border-white/10'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="6"
                  className={`resize-none rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 ${
                    errors.message ? 'border-rose-400' : 'border-white/10'
                  }`}
                  placeholder="Tell me about your project"
                />
                {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
              </label>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/35"
              >
                Send Message
              </button>
              {submitted ? (
                <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200">
                  Looks good. Your email client should open with the message ready.
                </p>
              ) : null}
            </form>
          </MotionCard>
        </div>
      </div>
    </section>
  )
}
