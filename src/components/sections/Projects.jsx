import { useState } from 'react'
import MotionCard from '../MotionCard'
import ProjectModal from '../ProjectModal'
import SectionHeading from '../SectionHeading'
import { projects } from '../../data/portfolio'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected project work"
          description="Production-minded project cards that highlight MERN stack development, polished UI, authentication, and AI matching logic."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <MotionCard
              key={project.title}
              delay={index * 0.08}
              className="group flex min-h-[560px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-0 transition hover:-translate-y-2 hover:border-violet-300/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-violet-950/30"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400" />
              <div className="relative m-4 mb-0 grid aspect-video place-items-center overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.22),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))]" />
                <div className="absolute inset-x-6 top-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="relative w-[78%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/30">
                  <div className="h-3 w-24 rounded-full bg-cyan-200/70" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((item) => (
                      <div key={item} className="rounded-xl border border-white/10 bg-slate-900/80 p-2">
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-cyan-300/25 to-violet-400/25" />
                        <div className="mt-2 h-2 rounded-full bg-white/20" />
                        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="absolute bottom-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-bold text-slate-300 backdrop-blur">
                  {project.imageLabel || `${project.title} preview`}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">
                    {project.highlight}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Case Study
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 leading-8 text-slate-300">{project.description}</p>

                <div className="mt-6 grid gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      <p className="text-sm font-semibold text-slate-200">{metric}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-black text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/10 sm:col-span-2 xl:col-span-1"
                  >
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
