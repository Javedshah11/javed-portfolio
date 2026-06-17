import { motion } from 'framer-motion'
import DownloadCvButton from '../DownloadCvButton'
import TypingText from '../TypingText'
import { profile } from '../../data/portfolio'
import profileImage from '../../assets/1771322868416.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pt-32 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-10 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-cyan-200">
            {profile.location} | Originally from {profile.origin}
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-bold text-slate-200 sm:text-2xl">
            {profile.title}
          </p>
          <div className="mt-4 text-xl font-bold sm:text-2xl">
            <TypingText />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <DownloadCvButton />
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[29rem]">
            <div className="absolute inset-x-10 top-8 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute inset-x-6 bottom-12 h-64 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-cyan-300/20" />
              <div className="absolute bottom-10 left-6 h-14 w-14 rounded-full border border-violet-300/20" />

              <div className="relative mx-auto aspect-square max-w-[22rem] rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-400 p-[3px] shadow-2xl shadow-cyan-950/50">
                <div className="h-full w-full rounded-full bg-slate-950 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-900">
                    <img
                      src={profileImage}
                      alt="Javed Shah"
                      className="h-full w-full scale-[1.03] object-cover object-top"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-sm text-center">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Full Stack Developer
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">{profile.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  MERN Stack developer building AI-powered web applications from
                  Islamabad, Pakistan.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    AI Match
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <p className="text-3xl font-black text-white">92%</p>
                    <p className="text-xs font-semibold text-cyan-200">OpenHouse</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Highlight
                  </p>
                  <p className="mt-2 text-xl font-black text-white">FYP Grade A</p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    AI-Based CV Matching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
