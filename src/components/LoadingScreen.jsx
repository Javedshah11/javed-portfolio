import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.1, duration: 0.45 }}
      className="pointer-events-none fixed inset-0 z-[80] grid place-items-center bg-slate-950"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="mx-auto h-14 w-14 rounded-full border-2 border-cyan-300/20 border-t-cyan-300"
        />
        <p className="mt-5 text-sm font-semibold tracking-[0.22em] text-slate-300">
          JAVED SHAH
        </p>
      </div>
    </motion.div>
  )
}
