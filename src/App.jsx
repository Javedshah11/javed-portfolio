import { useEffect, useState } from 'react'
import './styles/design-system.css'
import './App.css'
import './styles/refinements.css'
import './styles/credentials.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import PortfolioSections from './components/sections/PortfolioSections'
import Cursor from './components/Cursor'
import CommandPalette from './components/CommandPalette'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  useEffect(() => {
    const onKey = (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setPaletteOpen((value) => !value) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return <main><a className="skip-link" href="#main-content">Skip to content</a><LoadingScreen/><ScrollProgress/><Cursor/><Navbar onCommand={() => setPaletteOpen(true)}/><Hero/><PortfolioSections/><CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)}/></main>
}
