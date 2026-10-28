import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Reveal, Seo } from '../components/ui'
import { SERVICES, STEPS } from '../content'
const Cta = ({ t = 'Tell us what you want to build or fix' }) => <section className="bg-navy py-14 text-slate-300"><div className="wrap flex flex-wrap items-center justify-between gap-6"><h2 className="max-w-xl text-3xl text-white">{t}</h2><Link to="/contact" className="btn">Send a project enquiry <ArrowRight size={18} /></Link></div></section>
export function About() {
  return (<><Seo title="About Samgan Digital Tech | Our Approach and Values" desc="Learn about Samgan Digital Tech Private Limited, our mission, values and how we approach software and digital projects." path="about" />
    <PageHero title="Technology built around business problems" sub="Your Ideas. Our Innovation. A Smarter Digital Future." />
    <section className="py-16"><div className="wrap grid gap-12 md:grid-cols-2"><Reveal><h2 className="text-3xl">Who we are</h2><p className="mt-4 text-slate-600">Samgan Digital Tech Private Limited provides software development, AI and automation, healthcare IT and digital marketing services. We focus on understanding the requirement first, then recommending a solution that suits your process, team and budget.</p></Reveal>
      <Reveal delay={0.1}><h2 className="text-3xl">Mission and vision</h2><p className="mt-4 text-slate-600"><b>Mission:</b> to help businesses work more efficiently and reach customers through well-built digital solutions.</p><p className="mt-2 text-slate-600"><b>Vision:</b> technology that is practical, understandable and useful for every business we work with.</p></Reveal></div></section>
    <section className="border-y border-line bg-white py-16"><div className="wrap"><h2 className="text-3xl">Our values</h2><dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[['Innovation', 'Modern tools where they solve a real problem.'], ['Transparency', 'Clear scope, clear communication.'], ['Usability', 'Software people can use without training manuals.'], ['Reliability', 'Tested work and dependable support.']].map(([t, d]) => <div key={t} className="border-l-2 border-aqua pl-4"><dt className="font-display text-lg font-bold text-navy">{t}</dt><dd className="text-slate-600">{d}</dd></div>)}</dl></div></section><Cta /></>)
}
export function Services() {
  return (<><Seo title="Services | Software, AI, Healthcare IT and Digital Marketing" desc="Overview of Samgan Digital Tech services: custom software, AI automation, hospital management software and SEO." path="services" />
    <PageHero title="Services for building, automating and growing" sub="Four service areas, one team to talk to." />
    <section className="py-12"><div className="wrap">{SERVICES.map((s, i) => <Link key={s.slug} to={`/services/${s.slug}`} className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 border-t border-line py-8 transition-all hover:pl-3 md:grid-cols-[5rem_1fr_auto]"><span className="font-display text-4xl font-bold text-aqua">0{i + 1}</span><span><h2 className="text-2xl">{s.n}</h2><p className="text-slate-600">{s.short}</p></span><span className="col-start-2 font-bold text-teal md:col-start-auto">View details</span></Link>)}<div className="border-t border-line" /></div></section><Cta /></>)
}
export function ServicePage() {
  const s = SERVICES.find((x) => x.slug === useParams().slug)
  if (!s) return <NotFound />
  return (<><Seo title={s.title} desc={s.desc} path={`services/${s.slug}`} />
    <PageHero crumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / {s.n}</>} title={s.n} sub={s.short}><Link to="/contact" className="btn mt-6">Discuss this service</Link></PageHero>
    <section className="py-16"><div className="wrap grid gap-12 md:grid-cols-2"><Reveal><h2 className="text-3xl">Problems this helps with</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{s.problems.map((p) => <li key={p}>{p}</li>)}</ul></Reveal>
      <Reveal delay={0.1}><h2 className="text-3xl">Where it applies</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{s.uses.map((p) => <li key={p}>{p}</li>)}</ul><p className="mt-4 rounded border border-amber-300 bg-amber-50 p-3 text-sm">These are examples of what is possible, not a list of delivered projects.</p></Reveal></div></section>
    <section className="border-y border-line bg-white py-16"><div className="wrap"><h2 className="text-3xl">What we offer</h2><ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">{s.offers.map((o) => <li key={o} className="border-b border-line py-2">{o}</li>)}</ul></div></section>
    <section className="py-16"><div className="wrap"><h2 className="text-3xl">How we deliver</h2><ol className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">{STEPS.map(([t, d], i) => <li key={t} className="border-t-[3px] border-aqua pt-3"><span className="font-display text-xl font-bold text-teal">{i + 1}</span> <b className="text-navy">{t}</b><p className="text-sm text-slate-600">{d}</p></li>)}</ol></div></section>
    <section className="border-t border-line bg-white py-16"><div className="wrap max-w-3xl"><h2 className="mb-6 text-3xl">Questions</h2>{s.faq.map(([q, a]) => <details key={q} className="mb-2 rounded border border-line"><summary className="cursor-pointer p-4 font-bold text-navy">{q}</summary><p className="px-4 pb-4 text-slate-600">{a}</p></details>)}
      <p className="mt-8 text-sm">Related: {SERVICES.filter((x) => x !== s).map((x, i) => <span key={x.slug}>{i ? ' · ' : ''}<Link className="text-teal underline" to={`/services/${x.slug}`}>{x.n}</Link></span>)}</p></div></section><Cta /></>)
}
const LEGAL = {
  'privacy-policy': ['Privacy Policy', [['Who we are', 'Samgan Digital Tech Private Limited. Registered address and contact email: CONFIRM.'], ['Information we collect', 'If the enquiry form is enabled, we would receive the name, business email, company, service of interest and message you enter. Hosting (GitHub Pages) may keep standard technical logs: CONFIRM.'], ['How we use it', 'To respond to your enquiry. We do not sell personal information. CONFIRM any analytics or advertising tools before launch; none are included.'], ['Fonts', 'Pages load fonts from Google Fonts, which may receive your IP address.'], ['Retention and your rights', 'Retention period and how to request access or deletion: CONFIRM.']]],
  'terms-and-conditions': ['Terms and Conditions', [['Use of this website', 'This website gives general information about our services and may change without notice.'], ['No offer', 'Service descriptions are not a contract or a guarantee of results. Scope, fees and timelines are agreed in writing separately.'], ['Intellectual property', 'Website content and branding belong to the company unless stated otherwise.'], ['Liability, governing law and jurisdiction', 'CONFIRM with the company and a legal adviser.']]] }
export function Legal() {
  const slug = useParams().legal ?? '', d = LEGAL[slug]
  if (!d) return <NotFound />
  return (<><Seo title={`${d[0]} | Samgan Digital Tech`} desc={`${d[0]} for the Samgan Digital Tech website (draft pending company confirmation).`} path={slug} /><PageHero title={d[0]} />
    <section className="py-12"><div className="wrap max-w-3xl"><p className="mb-6 rounded border border-amber-300 bg-amber-50 p-3 text-sm">Draft for company review. Not legal advice and not reviewed by a lawyer. Items marked CONFIRM need company details before publication.</p>{d[1].map(([h, p]) => <div key={h} className="mb-6"><h2 className="text-2xl">{h}</h2><p className="mt-2 text-slate-600">{p}</p></div>)}</div></section></>)
}
export function NotFound() {
  return (<><Seo title="Page not found | Samgan Digital Tech" desc="This page could not be found." /><PageHero title="Page not found" sub="The page you are looking for does not exist or has moved." ><Link to="/" className="btn mt-6">Back to home</Link></PageHero></>)
}
