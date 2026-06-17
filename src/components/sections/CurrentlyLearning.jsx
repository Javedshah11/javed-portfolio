import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { currentlyLearning } from '../../data/portfolio'

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Currently Learning"
          title="Next skills I am sharpening"
          description="A short, honest snapshot of the technologies Javed is actively improving to become more production-ready."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentlyLearning.map((item, index) => (
            <MotionCard
              key={item.title}
              delay={index * 0.04}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.08]"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Learning
              </p>
              <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
