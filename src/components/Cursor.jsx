import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const frameRef = useRef(0)
  const pointRef = useRef({ x: -40, y: -40 })

  useEffect(() => {
    const finePointer = matchMedia('(pointer: fine)').matches
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const render = () => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${pointRef.current.x}px,${pointRef.current.y}px,0)`
      frameRef.current = 0
    }
    const move = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY }
      if (!frameRef.current) frameRef.current = requestAnimationFrame(render)
    }
    const over = (event) => {
      const hit = event.target.closest('a,button,[data-cursor]')
      cursorRef.current?.classList.toggle('is-active', Boolean(hit))
      const label = cursorRef.current?.querySelector('span')
      if (label) label.textContent = hit?.dataset.cursor || (hit?.target === '_blank' ? '↗' : '')
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerover', over); cancelAnimationFrame(frameRef.current) }
  }, [])

  return <div ref={cursorRef} className="cursor" aria-hidden="true"><span /></div>
}
