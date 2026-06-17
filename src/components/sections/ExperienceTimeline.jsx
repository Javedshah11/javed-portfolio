import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { experienceTimeline } from '../../data/portfolio'

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-white/[0.03] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience Timeline"
          title="Progression from student to full stack developer"
          description="A concise timeline that shows learning, certifications, MERN application work, and final year project delivery."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {experienceTimeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
            >
              <p className="text-3xl font-black text-cyan-300">{item.year}</p>
              <p className="mt-4 text-sm font-bold leading-6 text-white">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
