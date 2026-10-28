# Generates every page. Edit DOMAIN and LIVE below when the real domain is confirmed, then run: python3 build.py
DOMAIN="https://YOUR-DOMAIN.example"   # TODO: confirm production domain
LIVE=False                              # set True at launch to allow search indexing
NAME="Samgan Digital Tech Private Limited"
SV=[("custom-software-web-development","Custom Software and Web Development","Software, websites and apps built around how your business actually runs.",
 "Custom software development and web development services",
 ["Spreadsheets and manual steps slow the team down","Off-the-shelf tools don't fit your process","An old system is hard to change or maintain","Data sits in separate places with no clear reporting"],
 ["Custom business software","Website design and development","Web application development","Mobile application development","Business portals and dashboards","API development and third-party integrations","Database design and management","Enhancement and maintenance of existing software","Software testing and quality assurance","Process digitization and workflow improvement"],
 ["An internal portal that replaces email approvals","A customer-facing web app with login and dashboards","A connection between your billing tool and your CRM","A new company website with an enquiry workflow"],
 [("How do you start a project?","We begin by understanding your requirements and constraints, then agree on scope before development starts."),("Can you improve software we already have?","Yes. We can review an existing system and propose enhancements, fixes or maintenance support.")]),
("ai-development-business-automation","AI Development and Business Automation","Practical AI and automation for repetitive, document-heavy and data-heavy work.",
 "AI development services and business process automation",
 ["Staff retype the same data between systems","Documents arrive in mixed formats and need sorting","Reports take hours to assemble by hand","Customers ask the same questions repeatedly"],
 ["AI-powered business applications","AI assistants and chatbot development","Intelligent document processing","Business workflow automation","Repetitive task automation","AI integration with existing business systems","Data processing and reporting automation","Business process analysis and automation consulting"],
 ["A chatbot that answers common customer questions","Extracting fields from invoices or forms into a system","Scheduled reports compiled automatically","Routing incoming requests to the right team"],
 [("Is AI right for every process?","No. We first check whether a process is a good fit and recommend simpler automation when that works better."),("Will it replace our systems?","Not necessarily. We aim to connect with the tools you already use where technically feasible.")]),
("healthcare-it-hospital-management-software","Healthcare IT and Hospital Management Solutions","Software that helps hospitals and clinics manage patients, appointments and billing.",
 "Hospital management system software and healthcare software solutions",
 ["Patient records are scattered or on paper","Appointment queues are hard to manage","Billing and invoicing take too long to reconcile","Administrators lack a clear view of daily operations"],
 ["Hospital Management System (HMS)","Clinic and healthcare management software","Patient registration and management","Appointment scheduling","Billing and invoicing workflows","Hospital operational workflows","Digital record management","Reports and administrative dashboards","Implementation and support"],
 ["A clinic front desk that registers patients and books visits","Billing workflows linked to services delivered","Dashboards for daily administrative reporting","Moving paper records into a digital system"],
 [("Do you offer ready-made modules?","Modules are scoped with you based on your facility's workflows. Exact features are confirmed during requirement discussions."),("Is regulatory compliance included?","Compliance needs differ by facility and region. We discuss them during scoping; we don't claim certification here.")]),
("digital-marketing-seo","Digital Marketing and SEO","Be easier to find online and turn visitors into enquiries.",
 "SEO services and digital marketing services",
 ["Customers can't find your business in search","Your website gets visits but few enquiries","Ad spend is hard to measure","You don't know which pages perform"],
 ["Search Engine Optimization (SEO)","Local SEO and Google Business Profile optimization","Website content strategy","Keyword research and on-page SEO","Technical SEO","Website design and conversion optimization","Google Ads and paid search management","Landing page optimization","Lead generation strategy","Analytics and performance reporting","Social media marketing, where it fits the agreed scope"],
 ["Fixing technical issues that hold a site back in search","A landing page built for one campaign","Monthly reporting on traffic and enquiries","A Google Business Profile tidy-up for a local business"],
 [("Can you guarantee rankings?","No one can. Search results and ad outcomes depend on many factors; we plan, measure and improve steadily."),("Do you build the website too?","Yes. Website design and development is part of our software services.")])]
PAGES=[("","Home"),("about","About"),("services","Services"),("careers","Careers"),("contact","Contact")]
def head(t,d,path,depth):
    p="../"*depth
    rb='' if LIVE else '<meta name="robots" content="noindex,nofollow">'
    can=f'<link rel="canonical" href="{DOMAIN}/{path}">' if LIVE else ''
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{t}</title><meta name="description" content="{d}">{rb}{can}
<meta property="og:title" content="{t}"><meta property="og:description" content="{d}"><meta property="og:type" content="website"><meta property="og:image" content="{p}assets/icon-512.png">
<link rel="icon" href="{p}assets/favicon.png"><link rel="apple-touch-icon" href="{p}assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{p}assets/style.css"></head><body><a class="skip" href="#main">Skip to content</a>'''
def top(depth,cur):
    p="../"*depth
    li="".join(f'<li><a href="{p}{u}{"/" if u else "index.html"}"'+(' aria-current="page"' if cur==u else '')+f'>{l}</a></li>' for u,l in PAGES[:-1])
    return f'''<div id="prog" aria-hidden="true"></div><header class="top"><div class="wrap bar"><a href="{p}index.html"><img src="{p}assets/logo.png" alt="Samgan Digital Tech" width="94" height="44"></a>
<button class="menu" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Main"><ul>{li}<li><a class="btn" href="{p}contact/">Start a project</a></li></ul></nav></div></header><main id="main">'''
def foot(depth):
    p="../"*depth
    sl="".join(f'<li><a href="{p}services/{s[0]}/">{s[1]}</a></li>' for s in SV)
    return f'''</main><footer><div class="wrap"><div class="fgrid"><div><a class="logo" href="{p}index.html"><img src="{p}assets/logo.png" alt="Samgan Digital Tech" width="85" height="40"></a><p style="margin-top:1rem">Your Ideas. Our Innovation. A Smarter Digital Future.</p></div>
<div><h3>Services</h3><ul>{sl}</ul></div><div><h3>Company</h3><ul><li><a href="{p}about/">About us</a></li><li><a href="{p}careers/">Careers</a></li><li><a href="{p}contact/">Contact us</a></li></ul></div>
<div><h3>Legal</h3><ul><li><a href="{p}privacy-policy/">Privacy Policy</a></li><li><a href="{p}terms-and-conditions/">Terms and Conditions</a></li></ul></div></div>
<p class="legal">&copy; 2026 {NAME}. Innovating Today. Transforming Tomorrow.</p></div></footer><script src="{p}assets/site.js"></script></body></html>'''
def cta(p,h="Tell us what you want to build or fix",b="Share a few details and we'll respond with a sensible next step."):
    return f'<section class="s cta"><div class="wrap"><h2>{h}</h2><p>{b}</p><a class="btn" href="{p}contact/">Send a project enquiry</a></div></section>'
def write(path,html):
    import os;os.makedirs(os.path.dirname(path) or ".",exist_ok=True);open(path,"w").write(html)
def page(path,depth,cur,title,desc,body):
    write(path,head(title,desc,path.replace("index.html",""),depth)+top(depth,cur)+body+foot(depth))
HERO_SVG='''<svg viewBox="0 0 400 400" role="img" aria-label="Abstract circuit lines joining into a single path"><g fill="none" stroke-width="2.5"><path class="trace" stroke="#2fc4bd" d="M20 60H140L200 120V200"/><path class="trace" stroke="#2fc4bd" d="M20 140H100L160 200H200"/><path class="trace" stroke="#7fa3d6" d="M20 220H120L170 270H200"/><path class="trace" stroke="#7fa3d6" d="M20 300H150L200 250"/><path stroke="#c8cfd9" stroke-width="5" d="M200 120V280L260 330H380"/><path stroke="#2fc4bd" stroke-width="3" d="M200 200H300L340 160H380"/></g><g fill="#0a1f44" stroke="#2fc4bd" stroke-width="3"><circle cx="20" cy="60" r="6"/><circle cx="20" cy="140" r="6"/><circle cx="20" cy="220" r="6"/><circle cx="20" cy="300" r="6"/><circle cx="380" cy="330" r="7"/><circle cx="380" cy="160" r="7"/></g></svg>'''
# Home
cards="".join(f'<a class="item" href="services/{s[0]}/"><h3>{s[1]}</h3><p>{s[2]}</p><span class="more">Explore this service</span></a>' for s in SV)
home=f'''<section class="hero"><canvas id="bg" aria-hidden="true"></canvas><div class="wrap grid"><div><h1>Software, AI and healthcare technology for growing businesses.</h1>
<p>Samgan Digital Tech builds custom software, automates repetitive work, develops hospital and clinic systems, and helps businesses get found online.</p>
<div class="cta-row"><a class="btn" href="contact/">Start a project</a><a class="btn alt" href="services/">Explore services</a></div></div><div class="stage">{HERO_SVG}<div class="panel" id="panel"><img src="assets/mark.png" alt="Samgan Digital Tech logo mark" width="200" height="224"></div></div></div></section>
<section class="s alt"><div class="wrap"><h2>Explore what we build</h2><p>Pick a service area to see what it covers.</p><div class="tabs" role="tablist" aria-label="Service areas">{"".join(f'<button role="tab" id="t{i}" aria-controls="p{i}" aria-selected="{"true" if i==0 else "false"}" tabindex="{0 if i==0 else -1}">{s[1]}</button>' for i,s in enumerate(SV))}</div>
{"".join(f'<div class="tp" role="tabpanel" id="p{i}" aria-labelledby="t{i}"{"" if i==0 else " hidden"}><p>{s[2]}</p><ul class="list">{"".join(f"<li>{x}</li>" for x in s[5][:6])}</ul><a class="btn" href="services/{s[0]}/">See {s[1]}</a></div>' for i,s in enumerate(SV))}</div></section>
<section class="s"><div class="wrap split"><div><h2>Common problems we help with</h2><p>Many businesses come to us when daily work depends on manual steps, disconnected tools or an online presence that doesn't bring enquiries.</p></div>
<ul class="list" style="columns:1"><li>Manual processes that take too much staff time</li><li>Software that doesn't match how you work</li><li>Paper or scattered records in clinics and hospitals</li><li>A website that people don't find or don't act on</li></ul></div></section>
<section class="s"><div class="wrap"><h2>From idea to working solution</h2><ol class="steps flow"><li><strong>Understand</strong>We learn your goals, users and constraints.</li><li><strong>Define</strong>We agree scope, priorities and what success looks like.</li><li><strong>Build</strong>We design, develop and test in clear stages.</li><li><strong>Launch</strong>We release and support you through the handover.</li><li><strong>Improve</strong>We maintain and refine as your needs change.</li></ol></div></section>
<section class="s alt"><div class="wrap"><h2>What to expect from us</h2><div class="cols"><div class="card"><h3>Plain language</h3><p>Technical choices explained in business terms.</p></div><div class="card"><h3>Honest scoping</h3><p>We say what is feasible and what isn't.</p></div><div class="card"><h3>Usable results</h3><p>Designed for the people who use it daily.</p></div></div></div></section>{cta("","Have an idea? Let's work out the first step.")}'''
page("index.html",0,"","Samgan Digital Tech | Software, AI, Healthcare IT and SEO Services","Samgan Digital Tech builds custom software, AI automation, hospital management systems and SEO-led digital marketing for businesses.",home.replace('href="contact/">Send','href="contact/">Send'))
# About
about=f'''<section class="hero small"><div class="wrap"><h1>Technology built around business problems</h1><p>Your Ideas. Our Innovation. A Smarter Digital Future.</p></div></section>
<section class="s"><div class="wrap split"><div><h2>Who we are</h2><p>{NAME} provides software development, AI and automation, healthcare IT and digital marketing services to businesses.</p><p>We focus on understanding the requirement first, then recommending a solution that suits your process, team and budget.</p></div>
<div><h2>Mission and vision</h2><p><strong>Mission:</strong> to help businesses work more efficiently and reach customers through well-built digital solutions.</p><p><strong>Vision:</strong> a future where technology is practical, understandable and useful for every business we work with.</p></div></div></section>
<section class="s alt"><div class="wrap"><h2>Our values</h2><div class="cols"><div class="card"><h3>Innovation</h3><p>Using modern tools where they solve a real problem.</p></div><div class="card"><h3>Transparency</h3><p>Clear scope, clear communication.</p></div><div class="card"><h3>Usability</h3><p>Software people can use without training manuals.</p></div><div class="card"><h3>Reliability</h3><p>Tested work and dependable support.</p></div></div></div></section>{cta("")}'''
page("about/index.html",1,"about","About Samgan Digital Tech | Our Approach and Values","Learn about Samgan Digital Tech Private Limited, our mission, values and how we approach software and digital projects.",about.replace('href="contact/"','href="../contact/"'))
# Services overview
sv=f'''<section class="hero small"><div class="wrap"><h1>Services for building, automating and growing</h1><p>Four service areas, one team to talk to.</p></div></section>
<section class="s"><div class="wrap svc">{"".join(f'<a class="item" href="{s[0]}/"><h3>{s[1]}</h3><p>{s[2]}</p><span class="more">View service details</span></a>' for s in SV)}</div></section>{cta("../")}'''
page("services/index.html",1,"services","Services | Software, AI, Healthcare IT and Digital Marketing","Overview of Samgan Digital Tech services: custom software, AI automation, hospital management software and SEO.",sv)
# Detail pages
for s in SV:
    slug,t,sub,kw,probs,offs,uses,faq=s
    related="".join(f'<li><a href="../{o[0]}/">{o[1]}</a></li>' for o in SV if o!=s)
    b=f'''<section class="hero small"><div class="wrap"><p class="crumbs"><a href="../../index.html">Home</a> / <a href="../">Services</a> / {t}</p><h1>{t}</h1><p>{sub}</p><a class="btn" href="../../contact/">Discuss this service</a></div></section>
<section class="s"><div class="wrap split"><div><h2>Problems this helps with</h2><ul>{"".join(f"<li>{x}</li>" for x in probs)}</ul></div><div><h2>Where it applies</h2><ul>{"".join(f"<li>{x}</li>" for x in uses)}</ul><p class="note">These are examples of what is possible, not a list of delivered projects.</p></div></div></section>
<section class="s alt"><div class="wrap"><h2>What we offer: {kw.lower()}</h2><ul class="list">{"".join(f"<li>{x}</li>" for x in offs)}</ul></div></section>
<section class="s"><div class="wrap"><h2>How we deliver</h2><ol class="steps"><li><strong>Discuss</strong>Goals, users and constraints.</li><li><strong>Plan</strong>Scope and priorities in writing.</li><li><strong>Deliver</strong>Build or run the work in stages.</li><li><strong>Review</strong>Test, adjust, hand over.</li></ol></div></section>
<section class="s alt"><div class="wrap"><h2>Questions</h2>{"".join(f"<details><summary>{q}</summary><p>{a}</p></details>" for q,a in faq)}<p style="margin-top:1.5rem">Related services:</p><ul>{related}</ul></div></section>{cta("../../")}'''
    page(f"services/{slug}/index.html",2,"services",f"{t} | Samgan Digital Tech",f"{kw.capitalize()} from Samgan Digital Tech. {sub}",b)
# Careers
car=f'''<section class="hero small"><div class="wrap"><h1>Careers at Samgan Digital Tech</h1><p>We're always interested in hearing from capable, curious people.</p></div></section>
<section class="s"><div class="wrap"><h2>Future opportunities</h2><p>We don't have open positions listed right now. If you work in software development, testing, AI, healthcare IT or digital marketing and would like to be considered for the future, you're welcome to get in touch.</p><p class="note">Candidate applications are not accepted through this website yet. A CV submission process and contact address will be added once the company confirms them.</p><a class="btn" href="../contact/">Contact us</a></div></section>'''
page("careers/index.html",1,"careers","Careers | Samgan Digital Tech","Careers at Samgan Digital Tech: information for people interested in future opportunities.",car)
# Contact
opts="".join(f"<option>{s[1]}</option>" for s in SV)+"<option>Not sure yet</option>"
con=f'''<section class="hero small"><div class="wrap"><h1>Tell us about your project</h1><p>Share what you need. We'll suggest a practical next step.</p></div></section>
<section class="s"><div class="wrap"><p class="note" style="margin-bottom:1.5rem"><strong>Form not live yet:</strong> submissions can't be received until a form service or backend is connected. Contact details will be added once confirmed.</p>
<form id="enquiry" novalidate><div><label for="name">Name</label><input id="name" autocomplete="name"><p class="err" id="name-e"></p></div>
<div><label for="email">Business email</label><input id="email" type="email" autocomplete="email"><p class="err" id="email-e"></p></div>
<div><label for="phone">Phone (optional)</label><input id="phone" type="tel" autocomplete="tel"><p class="err" id="phone-e"></p></div>
<div><label for="service">Service of interest</label><select id="service"><option value="">Select a service</option>{opts}</select><p class="err" id="service-e"></p></div>
<div><label for="details">Project details</label><textarea id="details" rows="6"></textarea><p class="err" id="details-e"></p></div>
<p style="font-size:.92rem;color:var(--muted)">By sending this form you agree we may use your details to reply to your enquiry. See our <a href="../privacy-policy/">Privacy Policy</a>.</p><button class="btn" type="submit">Send enquiry</button><div id="status"></div></form></div></section>'''
page("contact/index.html",1,"contact","Contact Samgan Digital Tech | Project Enquiry","Send a project enquiry to Samgan Digital Tech for software, AI automation, healthcare IT or SEO services.",con)
# Legal
def legal(slug,t,sections):
    b=f'<section class="hero small"><div class="wrap"><h1>{t}</h1></div></section><section class="s"><div class="wrap"><p class="note">Draft for company review. Not legal advice and not reviewed by a lawyer. Items marked CONFIRM need company details before publication.</p>'+"".join(f"<h2>{h}</h2><p>{p}</p>" for h,p in sections)+"</div></section>"
    page(f"{slug}/index.html",1,"",f"{t} | Samgan Digital Tech",f"{t} for the Samgan Digital Tech website (draft pending company confirmation).",b)
legal("privacy-policy","Privacy Policy",[("Who we are",f"{NAME}. Registered address and contact email: CONFIRM."),("Information we collect","If the enquiry form is enabled, we would receive the name, email, phone number, service of interest and project details you enter. Web hosting may record standard technical logs: CONFIRM hosting provider."),("How we use it","To respond to your enquiry and discuss services. We do not sell personal information. CONFIRM any analytics, advertising or third-party tools before launch; none are currently included."),("Fonts","Pages load fonts from Google Fonts, which may receive your IP address. Remove if self-hosting."),("Retention and your rights","Retention period and how to request access or deletion: CONFIRM."),("Contact","Privacy contact: CONFIRM.")])
legal("terms-and-conditions","Terms and Conditions",[("Use of this website","This website provides general information about our services. Content may change without notice."),("No offer","Descriptions of services are not a contract or guarantee of results. Project scope, fees and timelines are agreed in writing separately."),("Intellectual property","Website content and branding belong to the company unless stated otherwise."),("Liability","Liability wording: CONFIRM with company and legal adviser."),("Governing law and jurisdiction","CONFIRM."),("Contact","CONFIRM company contact details.")])
# SEO files
urls=["","about/","services/","careers/","contact/","privacy-policy/","terms-and-conditions/"]+[f"services/{s[0]}/" for s in SV]
write("sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+"".join(f"<url><loc>{DOMAIN}/{u}</loc></url>" for u in urls)+"</urlset>")
write("robots.txt",("User-agent: *\nAllow: /\nSitemap: "+DOMAIN+"/sitemap.xml\n") if LIVE else "User-agent: *\nDisallow: /\n")
