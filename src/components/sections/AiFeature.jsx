import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'

export default function AiFeature() {
  return (
    <section
      id="ai-feature"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950 px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Feature / FYP"
          title="OpenHouse Connect compatibility scoring"
          description="The AI matching feature compares company requirements with student CV skills to produce compatibility scores for faster, more relevant hiring decisions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
          >
            <h3 className="text-2xl font-black text-white">How it works</h3>
            <div className="mt-6 grid gap-4">
              {['Extract student skills from CV', 'Compare against company technologies', 'Generate compatibility score', 'Support smarter shortlisting'].map(
                (item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-slate-950/60 p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-slate-200">{item}</p>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/75 p-5">
                <p className="text-sm font-bold text-slate-400">Company Requirements</p>
                <p className="mt-3 text-xl font-black text-white">React, Node.js, MongoDB</p>
              </div>
              <div className="rounded-2xl bg-slate-950/75 p-5">
                <p className="text-sm font-bold text-slate-400">Student CV Skills</p>
                <p className="mt-3 text-xl font-black text-white">MERN, REST APIs, JWT</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950/80 p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-cyan-200">Compatibility Score</p>
                  <p className="mt-2 text-6xl font-black text-white">92%</p>
                </div>
                <p className="max-w-xs text-sm leading-6 text-slate-300">
                  Strong match for full stack web development requirements.
                </p>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
