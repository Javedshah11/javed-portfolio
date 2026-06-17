import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { skillGroups } from '../../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.03] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Full stack skills for modern web products"
          description="A focused technical toolkit covering frontend engineering, backend APIs, authentication, databases, and responsive user interfaces."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionCard
              key={group.title}
              delay={index * 0.06}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                {group.title}
              </p>
              <div className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 transition hover:border-violet-300/40"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                    <p className="font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
