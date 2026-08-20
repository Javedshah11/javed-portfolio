import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const poster = '/hero-video-poster.webp'

export default function HeroDeveloperVideo() {
  const reduce = useReducedMotion()
  const videoRef = useRef(null)
  const [videoFailed, setVideoFailed] = useState(false)
  const useStaticFallback = reduce || videoFailed

  useEffect(() => {
    const video = videoRef.current
    if (!video || useStaticFallback) return undefined

    // Some mobile engines require the DOM properties in addition to JSX attributes.
    video.muted = true
    video.defaultMuted = true

    const play = () => {
      if (!document.hidden) video.play().catch(() => {})
    }
    const handleVisibility = () => {
      if (document.hidden) video.pause()
      else play()
    }

    play()
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [useStaticFallback])

  return <div className={`media-stage ${useStaticFallback ? 'is-static' : ''}`}>
    <div className="media-halo" aria-hidden="true" />
    {useStaticFallback
      ? <img className="developer-media" src={poster} alt="Javed Shah in a software engineering environment" width="848" height="480" />
      : <video
          ref={videoRef}
          className="developer-media"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="metadata"
          poster={poster}
          aria-label="Javed Shah walking in a cinematic software environment"
          onError={() => setVideoFailed(true)}
        >
          <source src="/animation_video.mp4" type="video/mp4" />
          <img src={poster} alt="Javed Shah in a software engineering environment" />
        </video>}
    <div className="media-vignette" aria-hidden="true" />
    <div className="media-coordinate" aria-hidden="true"><span>VISUAL_ANCHOR</span><b>40.71° / 74.00°</b></div>
  </div>
}
