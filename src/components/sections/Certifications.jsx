import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { certifications } from '../../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white/[0.03] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning credentials"
          description="Certification cards covering frontend development, JavaScript, Python, Linux, databases, entrepreneurship, and software engineering fundamentals."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((certification, index) => (
            <MotionCard
              key={certification}
              delay={index * 0.025}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-sm font-black text-cyan-200 ring-1 ring-white/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Certificate
                  </p>
                  <h3 className="mt-2 font-black leading-7 text-white">{certification}</h3>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
