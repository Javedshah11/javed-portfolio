import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import HeroDeveloperVideo from '../hero/HeroDeveloperVideo'
import CodeTerminal from '../hero/CodeTerminal'

const phrases=['SCALABLE SYSTEMS.','MODERN WEB EXPERIENCES.','FULL-STACK APPLICATIONS.','IDEAS INTO SOFTWARE.']

export default function Hero(){
  const reduce=useReducedMotion()
  const [phrase,setPhrase]=useState(0)
  useEffect(()=>{if(reduce)return;const timer=setInterval(()=>setPhrase(value=>(value+1)%phrases.length),3600);return()=>clearInterval(timer)},[reduce])
  return <section id="home" className="hero"><div className="hero-grid" aria-hidden="true"/><div className="hero-glow" aria-hidden="true"/><div className="hero-shell"><motion.div className="hero-copy" initial={reduce?false:{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}><p className="eyebrow"><span/>Hello, I’m</p><h1>JAVED<br/><span>SHAH</span></h1><p className="hero-role">Software Engineer · Full-Stack Developer</p><div className="hero-statement">I BUILD DIGITAL PRODUCTS THAT MATTER.<span className="phrase-wrap"><AnimatePresence mode="wait" initial={false}><motion.b key={phrases[phrase]} initial={reduce?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.3}}>{phrases[phrase]}</motion.b></AnimatePresence></span></div><p className="hero-meta">React <i/> Node.js <i/> REST APIs <i/> Authentication <i/> Dashboards</p><p className="hero-intro">I engineer scalable applications, modern interfaces, dependable backend APIs, and real-world software products.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><a className="button secondary" href="#contact">Let’s connect <span>↗</span></a></div><div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Javed-Shah-CV.txt" target="_blank" download>Download Resume ↓</a></div></motion.div><motion.div className="hero-visual" initial={reduce?false:{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:.9,delay:.15}}><div className="orbit orbit-one"/><div className="orbit orbit-two"/><HeroDeveloperVideo/><div className="status-chip"><span/> Available for opportunities</div><CodeTerminal/></motion.div></div><a className="scroll-cue" href="#about"><span>Scroll to explore</span><i/></a></section>
}
