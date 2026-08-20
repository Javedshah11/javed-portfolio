import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import portrait from '../../assets/1771322868416.jpg'

export default function HeroDeveloperVideo() {
  const reduce = useReducedMotion()
  const [mobile, setMobile] = useState(() => matchMedia('(max-width: 520px)').matches)
  useEffect(() => { const query=matchMedia('(max-width: 520px)'); const update=()=>setMobile(query.matches); query.addEventListener('change',update); return()=>query.removeEventListener('change',update) }, [])
  return <div className={`media-stage ${reduce || mobile ? 'is-static' : ''}`}>
    <div className="media-halo" aria-hidden="true" />
    {reduce || mobile
      ? <img className="developer-media" src={portrait} alt="Javed Shah" width="720" height="900" />
      : <video className="developer-media" autoPlay muted loop playsInline preload="metadata" poster={portrait} aria-label="Javed Shah in a cinematic software environment"><source src="/animation_video.mp4" type="video/mp4" /><img src={portrait} alt="Javed Shah" /></video>}
    <div className="media-vignette" aria-hidden="true" />
    <div className="media-coordinate" aria-hidden="true"><span>VISUAL_ANCHOR</span><b>40.71° / 74.00°</b></div>
  </div>
}
