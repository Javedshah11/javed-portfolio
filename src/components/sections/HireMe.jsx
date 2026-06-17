import DownloadCvButton from '../DownloadCvButton'
import MotionCard from '../MotionCard'

export default function HireMe() {
  return (
    <section id="hire-me" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionCard className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-slate-900 to-violet-500/10 p-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Hire Me
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black text-white sm:text-4xl">
            Available for Full Stack Developer Internships, Junior Developer Roles,
            and Freelance Web Development Projects.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100"
            >
              Contact Me
            </a>
            <DownloadCvButton />
          </div>
        </MotionCard>
      </div>
    </section>
  )
}
