import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Code2, Bot, HeartPulse, Search } from 'lucide-react'
import NetworkBg from '../components/NetworkBg'
import { Reveal, Seo, asset } from '../components/ui'
import { SERVICES, STEPS, CAPS } from '../content'
const ICONS = { Code2, Bot, HeartPulse, Search }
const fade = (i) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 * i, ease: [0.2, 0.7, 0.2, 1] } })
function Hero() {
  const rm = useReducedMotion(), panel = useRef(null)
  const move = (e) => { if (rm || !panel.current) return; const r = e.currentTarget.getBoundingClientRect(); panel.current.style.transform = `translate(${((e.clientX - r.left) / r.width - .5) * 16}px,${((e.clientY - r.top) / r.height - .5) * 16}px)` }
  return (<section className="relative overflow-hidden bg-navy py-16 text-slate-200 md:py-28" onPointerMove={move} onPointerLeave={() => panel.current && (panel.current.style.transform = '')}>
    <NetworkBg />
    <div className="wrap relative grid items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
      <div>
        <motion.p {...fade(0)} className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-aqua">Samgan Digital Tech</motion.p>
        <motion.h1 {...fade(1)} className="max-w-[18ch] text-4xl text-white sm:text-5xl lg:text-6xl">Software, AI and healthcare technology for growing businesses.</motion.h1>
        <motion.p {...fade(2)} className="mt-6 max-w-xl text-lg text-slate-300">We build custom software, automate repetitive work, develop hospital and clinic systems, and help businesses get found online.</motion.p>
        <motion.div {...fade(3)} className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="btn">Discuss your project <ArrowRight size={18} /></Link><Link to="/services" className="btn btn-ghost">Explore our services</Link></motion.div></div>
      <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="false">
        <svg viewBox="0 0 400 400" className="absolute inset-0" role="img" aria-label="Abstract circuit lines joining into one path"><g fill="none" strokeWidth="2.5" strokeDasharray="6 10">
          {[['M20 60H140L200 120V200', '#2fc4bd'], ['M20 140H100L160 200H200', '#2fc4bd'], ['M20 220H120L170 270H200', '#7fa3d6'], ['M20 300H150L200 250', '#7fa3d6']].map(([d, c]) => <path key={d} d={d} stroke={c}><animate attributeName="stroke-dashoffset" from="0" to="-320" dur="22s" repeatCount="indefinite" /></path>)}
          <path d="M200 120V280L260 330H380" stroke="#c8cfd9" strokeWidth="5" strokeDasharray="none" /><path d="M200 200H300L340 160H380" stroke="#2fc4bd" strokeWidth="3" strokeDasharray="none" /></g></svg>
        <div className="absolute inset-[14%] rotate-45 border border-aqua/30" /><div className="absolute inset-[4%] rotate-45 border border-slate-400/20" />
        <div ref={panel} className="absolute left-1/4 top-1/4 grid h-1/2 w-1/2 place-items-center rounded-full bg-white shadow-[0_0_0_10px_rgba(47,196,189,.18),0_0_0_22px_rgba(47,196,189,.08)] transition-transform duration-200"><img src={asset('mark.png')} alt="Samgan Digital Tech logo mark" width="200" height="224" className="w-[62%]" /></div></div></div></section>)
}
export default function Home() {
  return (<>
    <Seo title="Samgan Digital Tech | Software, AI, Healthcare IT and SEO Services" desc="Samgan Digital Tech builds custom software, AI automation, hospital management software and SEO-led digital marketing for businesses." />
    <Hero />
    <section className="py-16 md:py-24"><div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr]"><Reveal><h2 className="text-3xl md:text-4xl">Technology that fits how you work.</h2></Reveal>
      <Reveal delay={0.1}><p className="text-lg text-slate-600">Samgan Digital Tech Private Limited helps businesses build digital products, streamline operations, automate processes, improve healthcare workflows and strengthen their online presence. We start with your problem, explain options in plain language, and recommend what suits your team and budget.</p></Reveal></div></section>
    <section className="border-y border-line bg-white py-16 md:py-24"><div className="wrap"><Reveal><h2 className="text-3xl md:text-4xl">Four ways we help</h2></Reveal>
      <div className="mt-8">{SERVICES.map((s, i) => { const I = ICONS[s.icon]; return (<Reveal key={s.slug}><Link to={`/services/${s.slug}`} className="group grid grid-cols-[3rem_1fr] items-center gap-x-5 gap-y-1 border-t border-line py-7 transition-all hover:pl-3 md:grid-cols-[5rem_2.5rem_1fr_auto]">
        <span className="font-display text-3xl font-bold text-aqua md:text-4xl">0{i + 1}</span><I className="hidden text-teal md:block" size={28} aria-hidden="true" />
        <span><span className="block font-display text-xl font-bold text-navy md:text-2xl">{s.n}</span><span className="text-slate-600">{s.short}</span></span>
        <span className="col-start-2 inline-flex items-center gap-1 font-bold text-teal md:col-start-auto">View details <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span></Link></Reveal>) })}<div className="border-t border-line" /></div></div></section>
    <section className="py-16 md:py-24"><div className="wrap grid gap-12 md:grid-cols-2"><Reveal><h2 className="text-3xl">Problems we help with</h2><p className="mt-4 text-slate-600">Many businesses come to us when daily work depends on manual steps, disconnected tools or an online presence that does not bring enquiries.</p></Reveal>
      <Reveal delay={0.1}><dl className="divide-y divide-line">{[['Manual processes eat staff time', 'Workflow automation and custom tools'], ['Software does not match your process', 'Custom software built around your workflow'], ['Paper or scattered clinic records', 'Digital patient and appointment systems'], ["Website does not bring enquiries", 'SEO, content and conversion improvements']].map(([p, s]) => <div key={p} className="grid gap-1 py-4 sm:grid-cols-2"><dt className="font-semibold text-navy">{p}</dt><dd className="text-slate-600">{s}</dd></div>)}</dl></Reveal></div></section>
    <section className="bg-gradient-to-b from-navy to-navy-deep py-16 text-slate-300 md:py-24"><div className="wrap"><Reveal><h2 className="text-3xl text-white md:text-4xl">Capabilities</h2><p className="mt-3">The kinds of work we take on. Scope is always agreed with you first.</p></Reveal>
      <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{CAPS.map(([t, d], i) => <Reveal key={t} delay={i * 0.05}><li className="list-none border-t border-slate-600 pt-4"><b className="mb-1 block font-display text-lg text-white">{t}</b>{d}</li></Reveal>)}</ul></div></section>
    <section className="py-16 md:py-24"><div className="wrap"><Reveal><h2 className="text-3xl md:text-4xl">How we work</h2></Reveal>
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">{STEPS.map(([t, d], i) => <Reveal key={t} delay={i * 0.07}><li className="list-none border-t-[3px] border-aqua pt-3"><span className="font-display text-2xl font-bold text-teal">{i + 1}</span><b className="block text-navy">{t}</b><span className="text-sm text-slate-600">{d}</span></li></Reveal>)}</ol></div></section>
    <section className="border-y border-line bg-white py-16"><div className="wrap"><Reveal><p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal">Illustrative concepts</p><h2 className="text-3xl">What a project could look like</h2><p className="mt-3 max-w-2xl text-slate-600">These are examples of what is possible, not delivered projects. We will add real case studies when they are available.</p></Reveal>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">{['An approvals portal that replaces email chains', 'A clinic front desk for registration and appointments', 'Automated weekly reports from existing data'].map((t) => <li key={t} className="border-l-2 border-aqua pl-4 text-navy">{t}</li>)}</ul></div></section>
    <section className="py-16 md:py-24"><div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr]"><Reveal><h2 className="text-3xl md:text-4xl">Why work with us</h2></Reveal>
      <Reveal delay={0.1}><ul className="space-y-4 text-lg text-slate-700"><li><b className="text-navy">Plain language.</b> Technical choices explained in business terms.</li><li><b className="text-navy">Honest scoping.</b> We say what is feasible and what is not.</li><li><b className="text-navy">Usable results.</b> Designed for the people who use them every day.</li></ul></Reveal></div></section>
    <section className="bg-navy py-16 text-slate-300"><div className="wrap flex flex-wrap items-center justify-between gap-6"><Reveal><h2 className="max-w-xl text-3xl text-white">Have an idea? Let us work out the first step.</h2></Reveal><Link to="/contact" className="btn">Send a project enquiry <ArrowRight size={18} /></Link></div></section></>)
}
