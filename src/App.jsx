import { useEffect } from "react";

const COMPANY = {
  name: "Samgan Digital Tech",
  tagline: "Your Ideas. Our Innovation. A Smarter Digital Future.",
  email: "samgandigitaltech@gmail.com",
};

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Custom Software & Web Development",
    description:
      "Modern websites and tailored software solutions built around your business goals, customers, and workflows.",
    tags: ["Websites", "Web Applications", "Business Software"],
    tone: "mint",
  },
  {
    number: "02",
    icon: "✳",
    title: "AI Development & Automation",
    description:
      "Reduce repetitive work, connect business processes, and explore practical AI solutions that help your team work smarter.",
    tags: ["AI Solutions", "Workflow Automation", "Integration"],
    tone: "violet",
  },
  {
    number: "03",
    icon: "✚",
    title: "Healthcare IT Solutions",
    description:
      "Digital healthcare solutions, including hospital management systems, designed to simplify operations and improve information flow.",
    tags: ["Hospital Management", "Healthcare Software", "Digital Workflows"],
    tone: "blue",
  },
  {
    number: "04",
    icon: "↗",
    title: "Digital Marketing & SEO",
    description:
      "Build your online presence with search-friendly websites, thoughtful content, and digital marketing strategies.",
    tags: ["SEO", "Content Strategy", "Online Visibility"],
    tone: "orange",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand first",
    text: "We start with your goals, challenges, and the people who will use the solution.",
  },
  {
    number: "02",
    title: "Build with purpose",
    text: "We focus on useful features, clear experiences, and practical technology choices.",
  },
  {
    number: "03",
    title: "Grow together",
    text: "We aim to create digital foundations that can evolve as your business grows.",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function BrandLogo() {
  return (
    <a className="brand" href="#home" aria-label={`${COMPANY.name} home`}>
      <img
        className="brand-logo"
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt=""
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <span className="brand-fallback" aria-hidden="true">
        S<span>✳</span>
      </span>
      <span className="brand-copy">
        <strong>SAMGAN</strong>
        <small>DIGITAL TECH</small>
      </span>
    </a>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Abstract digital technology artwork">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-orbit orbit-three" />

      <div className="art-core">
        <div className="core-glow" />
        <div className="core-mark">S<span>✳</span></div>
        <span className="core-caption">IDEAS INTO IMPACT</span>
      </div>

      <div className="float-card float-card-top">
        <span className="status-dot" />
        <span>Digital innovation</span>
        <strong>01 / 04</strong>
      </div>

      <div className="float-card float-card-bottom">
        <span className="mini-bars" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </span>
        <span>
          <strong>Built for growth</strong>
          <small>Technology with purpose</small>
        </span>
      </div>

      <span className="art-node node-one" />
      <span className="art-node node-two" />
      <span className="art-node node-three" />
      <span className="art-cross cross-one">+</span>
      <span className="art-cross cross-two">+</span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <BrandLogo />
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">
            Let's talk <ArrowIcon diagonal />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="availability">
              <span className="status-dot" />
              DIGITAL SOLUTIONS. REAL-WORLD IMPACT.
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1>
              Your next big idea.
              <br />
              <span className="gradient-text">Built for the future.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-description">
              We turn business challenges into digital possibilities through
              custom software, AI automation, healthcare technology, and
              digital growth solutions.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let's build something <ArrowIcon />
              </a>
              <a className="button button-ghost" href="#services">
                Explore our services
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero-note">
              <span className="note-line" />
              <span>{COMPANY.tagline}</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={200}>
          <HeroVisual />
        </Reveal>
      </div>

      <div className="container hero-bottom">
        <span>SOFTWARE</span>
        <i />
        <span>INTELLIGENCE</span>
        <i />
        <span>HEALTHCARE</span>
        <i />
        <span>DIGITAL GROWTH</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<>Technology that moves <span className="gradient-text">you forward.</span></>}
            description="From the first idea to the finished digital experience, we help businesses find the right technology for the job."
          />
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 90}>
              <article className={`service-card tone-${service.tone}`}>
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="service-link"
                  href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                    `Enquiry: ${service.title}`
                  )}`}
                  aria-label={`Enquire about ${service.title}`}
                >
                  Explore this service <ArrowIcon diagonal />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-art">
            <div className="about-art-grid" />
            <div className="about-orb">
              <span>S</span>
              <i>✳</i>
            </div>
            <div className="about-label label-top">IDEAS</div>
            <div className="about-label label-right">INNOVATION</div>
            <div className="about-label label-bottom">IMPACT</div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-copy">
            <span className="eyebrow">A little about us</span>
            <h2>
              Technology should solve problems, <span className="gradient-text">not create them.</span>
            </h2>
            <p>
              At Samgan Digital Tech, we believe good technology starts with
              understanding people and their goals. We bring software,
              automation, healthcare IT, and digital marketing together to
              help businesses move forward with confidence.
            </p>
            <p>
              Our focus is simple: useful solutions, thoughtful execution,
              and digital experiences designed around real needs.
            </p>

            <a className="text-link" href="#contact">
              Tell us what you're building <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section-shell approach-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="How we think"
            title="Small details. Smarter solutions."
            description="Every project deserves a clear purpose, a considered approach, and room to grow."
          />
        </Reveal>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 100}>
              <article className="principle">
                <span className="principle-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const emailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    "Let's discuss a digital project"
  )}`;

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <span className="eyebrow">Have an idea?</span>
            <h2>
              Let's make something <span className="gradient-text">meaningful.</span>
            </h2>
            <p>
              Tell us about your business, your challenge, or the idea you
              want to bring to life. Let's explore what's possible together.
            </p>

            <a className="button button-primary" href={emailHref}>
              Start a conversation <ArrowIcon diagonal />
            </a>

            <span className="contact-footnote">
              Software · AI · Healthcare IT · Digital Marketing
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <BrandLogo />
          <p className="footer-tagline">{COMPANY.tagline}</p>
        </div>

        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
