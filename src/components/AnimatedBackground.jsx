import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)]" />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -35, 30, 0], y: [0, 40, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
    </div>
  )
}
