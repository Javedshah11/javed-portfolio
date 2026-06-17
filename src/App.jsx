import { motion } from 'framer-motion'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Achievements from './components/sections/Achievements'
import AiFeature from './components/sections/AiFeature'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import GithubStats from './components/sections/GithubStats'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100"
    >
      <AnimatedBackground />
      <ScrollProgress />
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AiFeature />
      <Education />
      <Achievements />
      <Certifications />
      <GithubStats />
      <Contact />
      <Footer />
      <BackToTop />
    </motion.main>
  )
}

export default App
