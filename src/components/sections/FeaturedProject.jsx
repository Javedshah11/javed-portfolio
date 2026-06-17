import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { projects } from '../../data/portfolio'

const openHouse = projects.find((project) => project.title === 'OpenHouse Connect')

export default function FeaturedProject() {
  if (!openHouse) return null

  return (
    <section
      id="featured-project"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Project"
          title="OpenHouse Connect"
          description="A recruiter-friendly case study of Javed's MERN stack final year project with AI-based CV and company matching."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="grid gap-5"
          >
            {[
              ['Project Overview', openHouse.overview],
              ['Problem Statement', openHouse.problem],
              ['Solution', openHouse.solution],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-8 text-slate-300">{text}</p>
              </article>
            ))}

            <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <h3 className="text-xl font-black text-white">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {openHouse.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-6"
          >
            <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">
                Role
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                {openHouse.role}
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {openHouse.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3"
                  >
                    <p className="text-sm font-bold text-slate-100">{metric}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <h3 className="text-xl font-black text-white">Key Features</h3>
              <div className="mt-4 grid gap-3">
                {openHouse.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-2xl bg-slate-950/60 p-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                  Gallery
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Project Screenshots Gallery
                </h3>
              </div>
              <a
                href={openHouse.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/30 px-5 py-3 text-center text-sm font-black text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/10"
              >
                GitHub Repository Link
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {openHouse.screenshots.map((screenshot, index) => (
                <div
                  key={screenshot}
                  className="group grid aspect-video place-items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/10 via-slate-950 to-violet-400/10 p-5 text-center"
                >
                  <div>
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.08] text-sm font-black text-cyan-200">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-sm font-black text-white">{screenshot}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Add real screenshot here when available.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-2xl font-black text-white">Recruiter Summary</h3>
            <p className="mt-4 leading-8 text-slate-300">
              OpenHouse Connect demonstrates full stack ownership across authentication,
              dashboards, job workflows, AI matching logic, and PDF generation. It is
              positioned as a strong final year project for junior developer and
              internship conversations.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm font-black text-cyan-100">
                Highlight: AI Matching System + MERN Stack Development
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  )
}
