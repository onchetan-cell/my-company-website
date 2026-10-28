import { useEffect, useRef } from 'react'
export default function NetworkBg() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, c = cv.getContext('2d'), rm = matchMedia('(prefers-reduced-motion:reduce)').matches
    let W, H, P = [], run = true, mx = -999, my = -999, raf
    const size = () => { const r = cv.getBoundingClientRect(); W = cv.width = r.width; H = cv.height = r.height
      P = Array.from({ length: Math.min(70, Math.floor(W * H / 22000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 })) }
    const draw = () => { c.clearRect(0, 0, W, H)
      for (const p of P) { if (!rm) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1 } c.fillStyle = 'rgba(47,196,189,.7)'; c.beginPath(); c.arc(p.x, p.y, 1.8, 0, 7); c.fill() }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) { const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y); if (d < 130) { c.strokeStyle = `rgba(127,163,214,${.28 * (1 - d / 130)})`; c.beginPath(); c.moveTo(P[i].x, P[i].y); c.lineTo(P[j].x, P[j].y); c.stroke() } }
      for (const p of P) { const d = Math.hypot(p.x - mx, p.y - my); if (d < 150) { c.strokeStyle = `rgba(47,196,189,${.6 * (1 - d / 150)})`; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(mx, my); c.stroke() } }
      if (run && !rm) raf = requestAnimationFrame(draw) }
    size(); draw()
    const mv = (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top }
    const lv = () => { mx = my = -999 }, rs = () => { size(); if (rm) draw() }
    const host = cv.parentElement; host.addEventListener('pointermove', mv); host.addEventListener('pointerleave', lv); addEventListener('resize', rs)
    const io = new IntersectionObserver((e) => { run = e[0].isIntersecting; if (run && !rm) { cancelAnimationFrame(raf); draw() } }); io.observe(cv)
    return () => { cancelAnimationFrame(raf); io.disconnect(); host.removeEventListener('pointermove', mv); host.removeEventListener('pointerleave', lv); removeEventListener('resize', rs) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}
