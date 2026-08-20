import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import HeroDeveloperVideo from '../hero/HeroDeveloperVideo'
import CodeTerminal from '../hero/CodeTerminal'

const phrases = ['SCALABLE SYSTEMS.', 'MODERN WEB EXPERIENCES.', 'FULL-STACK APPLICATIONS.', 'IDEAS INTO SOFTWARE.']
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  const reduce = useReducedMotion()
  const [phrase, setPhrase] = useState(0)
  useEffect(() => {
    if (reduce) return undefined
    const timer = setInterval(() => setPhrase((value) => (value + 1) % phrases.length), 3600)
    return () => clearInterval(timer)
  }, [reduce])

  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-glow" aria-hidden="true" />
    <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="hero-shell">
      <motion.div className="hero-copy" initial={reduce ? false : 'hidden'} animate="visible" transition={{ staggerChildren: .11, delayChildren: .12 }}>
        <motion.p variants={item} className="eyebrow"><span />Hello, I’m</motion.p>
        <motion.h1 variants={item} id="hero-title">JAVED<br /><span>SHAH</span></motion.h1>
        <motion.p variants={item} className="hero-role">Software Engineer · Full-Stack Developer</motion.p>
        <motion.div variants={item} className="hero-statement">I BUILD DIGITAL PRODUCTS THAT MATTER.<span className="phrase-wrap" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.b key={phrases[phrase]} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .45 }}>{phrases[phrase]}</motion.b></AnimatePresence></span></motion.div>
        <motion.p variants={item} className="hero-meta">React <i /> Node.js <i /> REST APIs <i /> Authentication <i /> Dashboards</motion.p>
        <motion.p variants={item} className="hero-intro">I engineer scalable applications, modern interfaces, dependable backend APIs, and real-world software products.</motion.p>
        <motion.div variants={item} className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><a className="button secondary" href="#contact">Let’s connect <span>↗</span></a></motion.div>
        <motion.div variants={item} className="social-row" aria-label="Profile links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Javed-Shah-CV.txt" download>Resume ↓</a></motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .32, ease: [.22, 1, .36, 1] }}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><HeroDeveloperVideo /><div className="status-chip"><span /> Available for opportunities</div><CodeTerminal /></motion.div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span>Scroll to explore</span><i /></a>
  </section>
}
