import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import portrait from '../../assets/1771322868416.jpg'

export default function HeroDeveloperVideo() {
  const reduce = useReducedMotion()
  const [mobile, setMobile] = useState(() => matchMedia('(max-width: 520px)').matches)
  useEffect(() => { const query=matchMedia('(max-width: 520px)'); const update=()=>setMobile(query.matches); query.addEventListener('change',update); return()=>query.removeEventListener('change',update) }, [])
  if (reduce || mobile) return <img className="developer-media" src={portrait} alt="Javed Shah" width="720" height="900" />
  return <video className="developer-media" autoPlay muted loop playsInline preload="metadata" poster={portrait} aria-label="Javed Shah walking"><source src="/animation_video.mp4" type="video/mp4"/><img src={portrait} alt="Javed Shah"/></video>
}
