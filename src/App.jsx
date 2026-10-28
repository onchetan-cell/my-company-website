@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #edf4ff;
  background: #0b1220;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
  --muted: #9ba9bd;
  --line: rgba(183, 204, 232, 0.13);
  --accent: #61ead5;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  background: radial-gradient(ellipse at 75% 12%, rgba(25, 95, 113, 0.13), transparent 35%), #0b1220;
  color: #edf4ff;
}

.container {
  width: min(1160px, calc(100% - 48px));
  margin-inline: auto;
}

/* Header & Navbar */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 18, 32, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.brand-logo {
  width: 43px;
  height: 43px;
  object-fit: contain;
  border-radius: 12px;
}

.brand-fallback {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  color: #07151d;
  font-size: 20px;
  font-weight: 850;
  background: linear-gradient(135deg, #8affea, #61a9ff);
  border-radius: 12px;
}

.brand-fallback span {
  font-size: 11px;
  margin-left: 2px;
}

.brand-copy strong, .brand-copy small {
  display: block;
  letter-spacing: 0.12em;
}

.brand-copy strong {
  font-size: 14px;
}

.brand-copy small {
  margin-top: 4px;
  color: var(--muted);
  font-size: 9px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 13px;
  color: #c1ccdc;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color 180ms ease;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-cta {
  color: var(--accent) !important;
  padding: 10px 16px;
  border: 1px solid rgba(97, 234, 213, 0.35);
  border-radius: 7px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Reveal Animation */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 700ms ease, transform 700ms ease;
  transition-delay: var(--reveal-delay, 0ms);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hero Section */
.hero {
  position: relative;
  padding-block: 95px 60px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 50px;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.16em;
  margin-bottom: 24px;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 14px rgba(97, 234, 213, 0.65);
}

.hero h1 {
  margin: 0 0 24px 0;
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1.08;
  letter-spacing: -0.055em;
  font-weight: 750;
}

.gradient-text {
  background: linear-gradient(100deg, #86f2d8 5%, #76baff 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  max-width: 530px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}

.button {
  min-height: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 22px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  transition: transform 180ms ease, background 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  color: #08151d;
  background: linear-gradient(110deg, #8cf2d8, #8fc8ff);
}

.button-ghost {
  border: 1px solid var(--line);
  color: #e0e9f7;
  background: rgba(255, 255, 255, 0.02);
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #7f91a9;
  font-size: 11px;
}

.note-line {
  width: 24px;
  height: 1px;
  background: var(--line);
}

/* Hero Art & Visuals */
.hero-art {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center;
}

.art-orbit {
  position: absolute;
  border: 1px solid rgba(121, 214, 222, 0.18);
  border-radius: 50%;
  animation: rotate 30s linear infinite;
}

.orbit-one { width: 260px; height: 260px; }
.orbit-two { width: 340px; height: 180px; transform: rotate(45deg); }
.orbit-three { width: 340px; height: 180px; transform: rotate(-45deg); }

.art-core {
  position: relative;
  z-index: 2;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #192b40, #101a2a);
  border: 1px solid rgba(133, 241, 225, 0.4);
  border-radius: 28px;
  box-shadow: 0 0 50px rgba(48, 199, 191, 0.15);
  transform: rotate(-6deg);
}

.core-mark {
  font-size: 42px;
  font-weight: 850;
  color: var(--accent);
  line-height: 1;
}

.core-mark span { font-size: 16px; }

.core-caption {
  margin-top: 6px;
  font-size: 7px;
  letter-spacing: 0.14em;
  color: #a5bbce;
}

.float-card {
  position: absolute;
  z-index: 3;
  padding: 12px 16px;
  background: rgba(17, 29, 45, 0.95);
  border: 1px solid rgba(156, 190, 216, 0.2);
  border-radius: 8px;
  font-size: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  animation: float 5s ease-in-out infinite;
}

.float-card-top {
  top: 40px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.float-card-top strong {
  color: var(--accent);
  margin-left: 6px;
}

.float-card-bottom {
  bottom: 40px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  animation-delay: -2s;
}

.float-card-bottom strong { display: block; font-size: 11px; }
.float-card-bottom small { color: var(--muted); font-size: 9px; }

.mini-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 14px;
}

.mini-bars i {
  display: block;
  width: 3px;
  background: var(--accent);
  border-radius: 1px;
}
.mini-bars i:nth-child(1) { height: 6px; }
.mini-bars i:nth-child(2) { height: 12px; }
.mini-bars i:nth-child(3) { height: 9px; }
.mini-bars i:nth-child(4) { height: 14px; }
.mini-bars i:nth-child(5) { height: 8px; }

.hero-bottom {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.14em;
}

.hero-bottom i {
  width: 4px;
  height: 4px;
  background: rgba(155, 169, 189, 0.4);
  border-radius: 50%;
}

/* Sections & Cards */
.section-shell {
  padding-block: 90px;
  border-top: 1px solid var(--line);
}

.section-heading {
  max-width: 650px;
  margin-bottom: 50px;
}

.section-heading .eyebrow {
  display: block;
  color: var(--accent);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-heading h2 {
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.15;
  letter-spacing: -0.04em;
  margin: 0 0 16px 0;
}

.section-heading p {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  background: rgba(17, 27, 43, 0.6);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  transition: border-color 200ms ease, transform 200ms ease;
}

.service-card:hover {
  border-color: rgba(97, 234, 213, 0.4);
  transform: translateY(-3px);
}

.service-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.service-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: rgba(97, 234, 213, 0.08);
  color: var(--accent);
  border-radius: 10px;
  font-size: 18px;
}

.service-number {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.1em;
}

.service-card h3 {
  font-size: 22px;
  letter-spacing: -0.03em;
  margin: 0 0 12px 0;
}

.service-card p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 24px 0;
  flex-grow: 1;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.service-tags span {
  padding: 5px 10px;
  background: rgba(140, 166, 198, 0.07);
  border: 1px solid var(--line);
  border-radius: 4px;
  font-size: 10px;
  color: #adbed1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 650;
  text-decoration: none;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: 60px;
}

.about-art {
  position: relative;
  height: 380px;
  background: rgba(17, 27, 43, 0.4);
  border: 1px solid var(--line);
  border-radius: 16px;
  display: grid;
  place-items: center;
}

.about-orb {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #192b40, #101a2a);
  border: 1px solid rgba(97, 234, 213, 0.4);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 38px;
  color: var(--accent);
  position: relative;
  box-shadow: 0 0 40px rgba(97, 234, 213, 0.15);
}

.about-orb i {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
}

.about-label {
  position: absolute;
  padding: 6px 12px;
  background: rgba(11, 18, 32, 0.9);
  border: 1px solid var(--line);
  border-radius: 6px;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--accent);
}

.label-top { top: 24px; left: 24px; }
.label-right { bottom: 40px; right: 24px; }
.label-bottom { bottom: 24px; left: 24px; }

.about-copy .eyebrow {
  display: block;
  color: var(--accent);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about-copy h2 {
  font-size: clamp(28px, 3.5vw, 42px);
  line-height: 1.15;
  letter-spacing: -0.04em;
  margin: 0 0 20px 0;
}

.about-copy p {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
  margin: 0 0 16px 0;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  margin-top: 10px;
}

/* Principles / Approach Section */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.principle {
  padding: 32px;
  background: rgba(17, 27, 43, 0.4);
  border: 1px solid var(--line);
  border-radius: 12px;
}

.principle-number {
  display: block;
  color: var(--accent);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.12em;
  margin-bottom: 16px;
}

.principle h3 {
  font-size: 19px;
  letter-spacing: -0.02em;
  margin: 0 0 10px 0;
}

.principle p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

/* Contact Section */
.contact-panel {
  position: relative;
  padding: 70px 50px;
  background: linear-gradient(135deg, #101b2a, #16263d);
  border: 1px solid rgba(97, 234, 213, 0.25);
  border-radius: 18px;
  text-align: center;
  overflow: hidden;
}

.contact-panel .eyebrow {
  display: inline-block;
  color: var(--accent);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.contact-panel h2 {
  font-size: clamp(34px, 4.5vw, 52px);
  letter-spacing: -0.04em;
  margin: 0 auto 20px auto;
  max-width: 700px;
}

.contact-panel p {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
  max-width: 580px;
  margin: 0 auto 36px auto;
}

.contact-footnote {
  display: block;
  margin-top: 24px;
  color: #7f91a9;
  font-size: 11px;
  letter-spacing: 0.1em;
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--line);
  padding-block: 50px 30px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

.footer-tagline {
  color: var(--muted);
  font-size: 12px;
  margin-top: 12px;
  max-width: 280px;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  gap: 32px;
  font-size: 13px;
}

.footer-nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-nav a:hover {
  color: var(--accent);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  color: #7f91a9;
  font-size: 11px;
}

.footer-bottom a {
  color: inherit;
  text-decoration: none;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

/* Responsive Media Queries */
@media (max-width: 960px) {
  .hero-grid, .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .services-grid, .principles-grid {
    grid-template-columns: 1fr;
  }
  .hero-bottom {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
  .contact-panel {
    padding: 40px 20px;
  }
  .footer-main {
    flex-direction: column;
    gap: 30px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
