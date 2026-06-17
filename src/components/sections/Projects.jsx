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
              className="group flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-0 transition hover:-translate-y-2 hover:border-violet-300/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-violet-950/30"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400" />
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
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-7 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-black text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/10"
                >
                  View Project Details
                </button>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
