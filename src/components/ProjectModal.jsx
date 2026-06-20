import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] overflow-y-auto bg-slate-950/85 px-5 py-8 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-white/[0.04] p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                  {project.highlight}
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">{project.title}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-400">{project.role}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-xl font-black text-white transition hover:bg-white/10"
                aria-label="Close project details"
              >
                x
              </button>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-5">
                {[
                  ['Overview', project.overview],
                  ['Problem Statement', project.problem],
                  ['Solution', project.solution],
                ].map(([title, text]) => (
                  <section key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="text-lg font-black text-white">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{text}</p>
                  </section>
                ))}

                <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-black text-white">Screenshots Gallery</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {project.screenshots.map((screenshot) => (
                      <div
                        key={screenshot}
                        className="grid aspect-video place-items-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-violet-400/10 p-4 text-center text-sm font-bold text-slate-300"
                      >
                        {screenshot}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-black text-white">Work Completed</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {(project.workCompleted || project.metrics).map((item) => (
                      <p
                        key={item}
                        className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-200"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="grid content-start gap-5">
                <section className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <h3 className="text-lg font-black text-white">My Role</h3>
                  <p className="mt-3 text-sm font-semibold text-cyan-100">{project.role}</p>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-black text-white">Features</h3>
                  <div className="mt-4 grid gap-2">
                    {project.features.map((feature) => (
                      <p key={feature} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-200">
                        {feature}
                      </p>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-black text-white">Technologies Used</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 text-center text-sm font-black text-white transition hover:border-cyan-300 hover:bg-white/10"
                  >
                    GitHub Link
                  </a>
                  <a
                    href={project.demo}
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1"
                  >
                    Live Demo Link
                  </a>
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
