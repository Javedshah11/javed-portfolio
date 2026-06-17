import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AchievementCounter({ achievement, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1000
    const start = performance.now()

    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(achievement.value * eased))

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [achievement.value, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay }}
      className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
    >
      <p className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-4xl font-black text-transparent">
        {achievement.display ?? `${count}${achievement.suffix}`}
      </p>
      <p className="mt-4 font-black leading-7 text-white">{achievement.label}</p>
    </motion.div>
  )
}
