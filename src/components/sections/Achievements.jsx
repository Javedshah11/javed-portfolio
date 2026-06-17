import AchievementCounter from '../AchievementCounter'
import SectionHeading from '../SectionHeading'
import { achievements } from '../../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Academic and project milestones"
          description="A concise record of Javed's software engineering foundation, FYP performance, and MERN development focus."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <AchievementCounter
              key={achievement.label}
              achievement={achievement}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
