import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { services } from '../../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Can Build"
          title="Practical web development services"
          description="Recruiter-friendly capabilities focused on the exact types of systems Javed can contribute to as a full stack developer."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionCard
              key={service}
              delay={index * 0.04}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-sm font-black text-cyan-200">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-black text-white">{service}</h3>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
