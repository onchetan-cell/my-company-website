import { company, services } from './data/content.js'

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Samgan Digital Tech home">
        <span className="brand-mark">S</span>
        <span>
          <strong>SAMGAN</strong>
          <small>DIGITAL TECH</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-cta">Let's Talk ↗</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          TECHNOLOGY THAT MOVES BUSINESS FORWARD
        </div>

        <h1>
          Turn your ideas
          <br />
          into <span className="gradient-text">digital impact.</span>
        </h1>

        <p className="hero-description">{company.description}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Discuss your project <span>↗</span>
          </a>
          <a className="button button-secondary" href="#services">
            Explore our services ↓
          </a>
        </div>

        <p className="hero-note">{company.tagline}</p>
      </div>

      <div className="hero-visual" aria-label="Abstract digital network illustration">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="visual-glow" />
        <div className="core">
          <span>S</span>
          <small>DIGITAL INNOVATION</small>
        </div>
        <div className="floating-chip chip-one">AI + AUTOMATION</div>
        <div className="floating-chip chip-two">SOFTWARE</div>
        <div className="floating-chip chip-three">HEALTHCARE IT</div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="services-section section-wrap" id="services">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title={<>Technology built around <span className="gradient-text">your business.</span></>}
        description="From your first digital presence to connected business systems, we help bring the right solutions together."
      />

      <div className="services-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <a
              className="service-arrow"
              href="#contact"
              aria-label={`Enquire about ${service.title}`}
            >
              ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-label">
        <p className="eyebrow">A PARTNER IN YOUR DIGITAL JOURNEY</p>
        <h2>
          Good technology should make business <span className="gradient-text">simpler.</span>
        </h2>
      </div>

      <div className="about-copy">
        <p>
          We bring software development, automation, healthcare technology,
          and digital marketing together to help businesses solve real
          problems with practical digital solutions.
        </p>

        <div className="principles">
          <div>
            <span>01</span>
            <h3>Understand first</h3>
            <p>We start with your needs, challenges, and objectives.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Build thoughtfully</h3>
            <p>We focus on useful features, clear design, and usability.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Improve continuously</h3>
            <p>We value feedback, reliability, and ongoing improvement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's make something <span className="gradient-text">meaningful.</span>
        </h2>
        <p>
          Tell us what you want to build, improve, or automate. Let's explore
          the right approach for your business.
        </p>
        <a
          className="button button-primary"
          href="mailto:YOUR_VERIFIED_BUSINESS_EMAIL"
        >
          Start a conversation ↗
        </a>
        <small>
          Replace YOUR_VERIFIED_BUSINESS_EMAIL with your actual business email
          before publishing.
        </small>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>
          <strong>SAMGAN</strong>
          <small>DIGITAL TECH</small>
        </span>
      </a>

      <p>{company.tagline}</p>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <small>© {new Date().getFullYear()} Samgan Digital Tech. All rights reserved.</small>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
