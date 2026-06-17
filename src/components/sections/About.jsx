import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { profile } from '../../data/portfolio'

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Software engineering graduate with a builder's mindset."
          description="I turn product ideas into responsive, maintainable, and practical full stack web applications."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <MotionCard className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <div className="grid gap-4 text-sm text-slate-300">
              <p>
                <span className="font-bold text-white">Location:</span> {profile.location}
              </p>
              <p>
                <span className="font-bold text-white">Originally From:</span> {profile.origin}
              </p>
              <p>
                <span className="font-bold text-white">Email:</span> {profile.email}
              </p>
              <p>
                <span className="font-bold text-white">Phone:</span> {profile.phone}
              </p>
            </div>
          </MotionCard>

          <MotionCard className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 leading-8 text-slate-300">
            <p>
              I am a Software Engineering graduate from Riphah International University
              and a passionate Full Stack Web Developer with experience in building
              modern, responsive, and scalable web applications. My expertise includes
              React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS.
            </p>
            <p className="mt-5">
              I developed OpenHouse Connect, an AI-powered Final Year Project that
              matches student CVs with company requirements and generates compatibility
              scores.
            </p>
          </MotionCard>
        </div>
      </div>
    </section>
  )
}
