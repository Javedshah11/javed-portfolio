import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-cyan-400 text-lg font-black text-slate-950 shadow-lg shadow-cyan-400/25 transition hover:-translate-y-1 hover:bg-cyan-300"
          aria-label="Back to top"
        >
          ^
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
