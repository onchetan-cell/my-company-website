import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { SITE } from '../content'
export const asset = (p) => `${import.meta.env.BASE_URL}assets/${p}`
export function Seo({ title, desc, path = '' }) {
  useEffect(() => {
    document.title = title
    const set = (sel, attr, val, create) => { let el = document.head.querySelector(sel); if (!el) { el = document.createElement(create.tag); Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el) } el.setAttribute(attr, val) }
    set('meta[name=description]', 'content', desc, { tag: 'meta', attrs: { name: 'description' } })
    set('link[rel=canonical]', 'href', SITE + path, { tag: 'link', attrs: { rel: 'canonical' } })
    set('meta[property="og:title"]', 'content', title, { tag: 'meta', attrs: { property: 'og:title' } })
    set('meta[property="og:description"]', 'content', desc, { tag: 'meta', attrs: { property: 'og:description' } })
  }, [title, desc, path])
  return null
}
export function Reveal({ children, delay = 0, className = '' }) {
  const rm = useReducedMotion()
  return <motion.div className={className} initial={rm ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
}
export function PageHero({ crumbs, title, sub, children }) {
  return (<section className="bg-navy py-14 text-slate-200 md:py-20"><div className="wrap">
    {crumbs && <p className="mb-4 text-sm text-slate-400">{crumbs}</p>}
    <h1 className="max-w-[22ch] text-4xl text-white md:text-5xl">{title}</h1>
    {sub && <p className="mt-4 max-w-2xl text-lg text-slate-300">{sub}</p>}{children}</div></section>)
}
