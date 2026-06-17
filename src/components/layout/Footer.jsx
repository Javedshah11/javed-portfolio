import { profile } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-xl font-black text-white">{profile.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Full Stack Developer focused on MERN Stack applications, responsive UI,
            and AI-powered web solutions.
          </p>
          <p className="mt-5 text-sm text-slate-500">
            (c) 2026 {profile.name}. Built with React, Vite, Tailwind CSS, and Framer Motion.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
