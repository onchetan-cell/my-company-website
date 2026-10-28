import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { MotionConfig } from 'motion/react'
import { SERVICES } from '../content'
import { asset } from './ui'
const nav = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services']]
export default function Layout() {
  const [open, setOpen] = useState(false), [sc, setSc] = useState(false), { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { const f = () => setSc(scrollY > 10); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const cls = ({ isActive }) => `border-b-2 py-1 font-semibold ${isActive ? 'border-teal' : 'border-transparent hover:border-teal'}`
  return (<MotionConfig reducedMotion="user">
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-2">Skip to content</a>
    <header className={`sticky top-0 z-40 border-b border-line bg-white/95 transition-shadow ${sc ? 'shadow-md' : ''}`}>
      <div className={`wrap flex items-center justify-between transition-all ${sc ? 'min-h-[56px]' : 'min-h-[68px]'}`}>
        <Link to="/" aria-label="Samgan Digital Tech home"><img src={asset('logo.png')} alt="Samgan Digital Tech" width="94" height="44" className="h-11 w-auto" /></Link>
        <button className="flex min-h-[44px] items-center gap-2 rounded-md border border-line px-3 font-semibold md:hidden" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}Menu</button>
        <nav id="nav" aria-label="Main" className={`${open ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-b border-line bg-white md:static md:block md:border-0 md:bg-transparent`}>
          <ul className="flex flex-col gap-1 px-5 py-3 md:flex-row md:items-center md:gap-7 md:p-0">
            {nav.map(([to, l]) => <li key={to}><NavLink to={to} end={to === '/'} className={cls}>{l}</NavLink></li>)}
            <li><NavLink to="/contact" className="btn !py-2">Discuss your project</NavLink></li></ul></nav></div></header>
    <main id="main"><Outlet /></main>
    <footer className="bg-navy-deep py-12 text-sm text-slate-400"><div className="wrap grid gap-8 md:grid-cols-4">
      <div><Link to="/" className="inline-block rounded bg-white px-3 py-2"><img src={asset('logo.png')} alt="Samgan Digital Tech" width="85" height="40" className="h-10 w-auto" /></Link><p className="mt-4">Your Ideas. Our Innovation. A Smarter Digital Future.</p></div>
      <div><h3 className="mb-2 font-display text-base text-white">Services</h3><ul className="space-y-1">{SERVICES.map((s) => <li key={s.slug}><Link className="hover:underline" to={`/services/${s.slug}`}>{s.n}</Link></li>)}</ul></div>
      <div><h3 className="mb-2 font-display text-base text-white">Company</h3><ul className="space-y-1"><li><Link className="hover:underline" to="/about">About us</Link></li><li><Link className="hover:underline" to="/contact">Contact us</Link></li></ul></div>
      <div><h3 className="mb-2 font-display text-base text-white">Legal</h3><ul className="space-y-1"><li><Link className="hover:underline" to="/privacy-policy">Privacy Policy</Link></li><li><Link className="hover:underline" to="/terms-and-conditions">Terms and Conditions</Link></li></ul></div></div>
      <p className="wrap mt-8 border-t border-white/10 pt-4 text-xs">&copy; 2026 Samgan Digital Tech Private Limited. Innovating Today. Transforming Tomorrow.</p></footer></MotionConfig>)
}
