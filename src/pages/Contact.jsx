import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, Seo } from '../components/ui'
import { SERVICES } from '../content'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''
const RULES = { name: (v) => v.length > 1 || 'Enter your name.', email: (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || 'Enter a valid email address.', service: (v) => !!v || 'Choose a service.', message: (v) => v.length >= 20 || 'Describe your project in at least 20 characters.' }
export default function Contact() {
  const [vals, setVals] = useState({ name: '', email: '', company: '', service: '', message: '' }), [errs, setErrs] = useState({}), [state, setState] = useState({ k: 'idle' })
  const on = (k) => (e) => setVals({ ...vals, [k]: e.target.value })
  async function submit(e) {
    e.preventDefault()
    const er = {}; for (const k in RULES) { const r = RULES[k](vals[k].trim()); if (r !== true) er[k] = r }
    setErrs(er); const first = Object.keys(er)[0]
    if (first) { setState({ k: 'invalid' }); document.getElementById(first)?.focus(); return }
    if (!ENDPOINT) { setState({ k: 'nobackend' }); return }
    setState({ k: 'sending' })
    try { const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(vals) }); setState({ k: r.ok ? 'sent' : 'fail' }) } catch { setState({ k: 'fail' }) }
  }
  const msg = { invalid: 'Please fix the highlighted fields.', nobackend: 'Your details look valid, but this form is not connected to a mailbox or form service yet, so nothing was sent.', sending: 'Sending...', sent: 'Thank you. Your enquiry was sent.', fail: 'Something went wrong and your enquiry was not sent. Please try again later.' }[state.k]
  const F = ({ id, label, type = 'text', area, children, opt }) => (<div><label htmlFor={id} className="mb-1 block font-semibold">{label}{opt && <span className="font-normal text-slate-500"> (optional)</span>}</label>
    {area ? <textarea id={id} rows={6} className="field" value={vals[id]} onChange={on(id)} aria-invalid={!!errs[id]} aria-describedby={`${id}-e`} /> : children || <input id={id} type={type} className="field" value={vals[id]} onChange={on(id)} aria-invalid={!!errs[id]} aria-describedby={`${id}-e`} autoComplete={id === 'email' ? 'email' : id === 'name' ? 'name' : 'off'} />}<p id={`${id}-e`} className="err">{errs[id]}</p></div>)
  return (<><Seo title="Contact Samgan Digital Tech | Project Enquiry" desc="Send a project enquiry to Samgan Digital Tech for software, AI automation, healthcare IT or SEO services." path="contact" />
    <PageHero title="Tell us about your project" sub="Share what you need. We will suggest a practical next step." />
    <section className="py-12"><div className="wrap">
      {!ENDPOINT && <p className="mb-6 rounded border border-amber-300 bg-amber-50 p-3 text-sm"><b>Form not live yet:</b> submissions cannot be received until a form service is connected. Contact details will be added once confirmed.</p>}
      <form onSubmit={submit} noValidate className="grid max-w-2xl gap-3">
        <F id="name" label="Full name" /><F id="email" label="Business email" type="email" /><F id="company" label="Company name" opt />
        <F id="service" label="Service of interest"><select id="service" className="field" value={vals.service} onChange={on('service')} aria-invalid={!!errs.service} aria-describedby="service-e"><option value="">Select a service</option>{SERVICES.map((s) => <option key={s.slug}>{s.n}</option>)}<option>Not sure yet</option></select></F>
        <F id="message" label="Project details" area />
        <p className="text-sm text-slate-600">We use your details only to reply to your enquiry. See our <Link className="text-teal underline" to="/privacy-policy">Privacy Policy</Link>.</p>
        <button className="btn w-fit" disabled={state.k === 'sending'}>{state.k === 'sending' ? 'Sending...' : 'Send enquiry'}</button>
        <div role="status" aria-live="polite" className={msg ? `rounded border p-3 ${state.k === 'sent' ? 'border-green-400 bg-green-50' : 'border-amber-300 bg-amber-50'}` : ''}>{msg}</div></form></div></section></>)
}
