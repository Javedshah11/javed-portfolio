import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { education } from '../../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="Timeline of academic and project growth"
          description="A focused software engineering path shaped by full stack development, AI matching systems, and final year project execution."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent sm:block" />
          <div className="grid gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:ml-12"
              >
                <span className="absolute -left-[3.25rem] top-7 hidden h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-lg shadow-cyan-300/30 sm:block" />
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                  {item.year}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-1 font-bold text-violet-200">{item.institute}</p>
                <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
