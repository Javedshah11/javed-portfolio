import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { skills } from '../../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.03] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Full stack skills for modern web products"
          description="A focused technical toolkit covering frontend engineering, backend APIs, authentication, databases, and responsive user interfaces."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <MotionCard
              key={skill.name}
              delay={index * 0.03}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {skill.category}
                  </p>
                  <p className="mt-2 text-lg font-black text-white">{skill.name}</p>
                </div>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-black text-slate-300">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-700 group-hover:brightness-125"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
