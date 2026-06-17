import DownloadCvButton from '../DownloadCvButton'
import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Resume"
          title="Recruiter-ready CV preview"
          description="A clean one-page resume can be generated instantly as a professional PDF without a backend."
        />
        <MotionCard className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-cyan-300/20 bg-white p-6 text-slate-950">
            <p className="text-2xl font-black">Javed Shah</p>
            <p className="mt-1 text-sm font-bold text-blue-700">
              Software Engineering Graduate | Full Stack Developer
            </p>
            <div className="mt-5 h-px bg-blue-200" />
            <p className="mt-5 text-xs leading-5 text-slate-700">
              Software Engineering graduate from Riphah International University with
              MERN stack experience, AI CV matching project work, responsive UI skills,
              and backend API development.
            </p>
            <div className="mt-5 grid gap-2 text-xs text-slate-700">
              <p>Skills: React, Node.js, Express.js, MongoDB, Tailwind CSS</p>
              <p>Education: BS Software Engineering, CGPA 2.83 / 4.00</p>
              <p>Projects: OpenHouse Connect, Ecommerce Full Stack Design</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-black text-white">One-click PDF resume</h3>
            <p className="mt-4 leading-8 text-slate-300">
              The generated resume is simple, ATS-friendly, black and white with a blue
              accent, and includes profile summary, skills, education, projects,
              achievements, and certifications.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <DownloadCvButton />
              <a
                href="/Javed-Shah-CV.txt"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10"
              >
                View Resume
              </a>
            </div>
          </div>
        </MotionCard>
      </div>
    </section>
  )
}
