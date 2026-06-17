import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DownloadCvButton from '../DownloadCvButton'
import { navItems, profile } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => navItems.map((item) => item.href.slice(1)), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-base font-black text-white sm:text-lg">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-sm text-slate-950">
            JS
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm font-bold text-slate-300 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 transition ${
                activeSection === item.href.slice(1)
                  ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20'
                  : 'hover:bg-white/[0.08] hover:text-cyan-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <DownloadCvButton variant="compact" className="hidden sm:inline-flex" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 sm:inline-flex"
          >
            LinkedIn
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white xl:hidden"
          >
            <span className="text-xl leading-none">{open ? 'x' : '='}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/10 bg-slate-950/95 px-5 py-4 xl:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold ${
                    activeSection === item.href.slice(1)
                      ? 'bg-cyan-300 text-slate-950'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <DownloadCvButton variant="compact" className="mt-2 w-full" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
