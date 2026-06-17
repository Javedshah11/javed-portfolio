import MotionCard from '../MotionCard'
import SectionHeading from '../SectionHeading'
import { contributionWeeks, githubStats, profile, topLanguages } from '../../data/portfolio'

const contributionColors = [
  'bg-slate-800',
  'bg-cyan-950',
  'bg-cyan-800',
  'bg-cyan-500',
  'bg-violet-400',
]

export default function GithubStats() {
  return (
    <section id="github" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub Contributions"
          title="Development activity and engineering focus"
          description="A GitHub-inspired contribution section that highlights consistent practice, MERN stack work, and AI-focused project development."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionCard className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Profile
            </p>
            <h3 className="mt-4 text-3xl font-black text-white">Javedshah11</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Explore repositories, learning projects, and full stack experiments on
              GitHub.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-black text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
            >
              GitHub Profile Button
            </a>

            <div className="mt-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Top Languages
              </p>
              <div className="mt-4 grid gap-3">
                {topLanguages.map((language) => (
                  <div key={language.name}>
                    <div className="mb-1 flex justify-between text-xs font-bold text-slate-300">
                      <span>{language.name}</span>
                      <span>{language.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                        style={{ width: `${language.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionCard>
          <MotionCard className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                  Contribution Map
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">Consistent build habit</h3>
              </div>
              <p className="text-sm font-semibold text-slate-400">Latest development focus</p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <div className="grid w-max grid-flow-col grid-rows-7 gap-2">
                {contributionWeeks.flatMap((week, weekIndex) =>
                  week.map((level, dayIndex) => (
                    <span
                      key={`${weekIndex}-${dayIndex}`}
                      className={`h-4 w-4 rounded ${contributionColors[level]} ring-1 ring-white/5`}
                      title={`Contribution level ${level}`}
                    />
                  )),
                )}
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {githubStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  )
}
