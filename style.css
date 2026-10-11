/* ============================================================
   Sumaiya Akter Shukhy — Data Analyst Portfolio (light theme)
   ============================================================ */

:root {
  --bg: #f7f6f2;
  --surface: #ffffff;
  --surface-2: #f0efe9;
  --border: #e5e2d9;
  --ink: #16202f;
  --muted: #5b6472;
  --teal: #0d9488;
  --teal-dark: #0f766e;
  --blue: #2563eb;
  --gradient: linear-gradient(135deg, #0d9488 0%, #2563eb 100%);
  --radius: 16px;
  --shadow: 0 10px 30px rgba(22, 32, 47, 0.08);
  --shadow-lg: 0 24px 60px rgba(22, 32, 47, 0.14);
  --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: "Inter", system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.65;
  overflow-x: hidden;
}

h1, h2, h3, h4, .nav__logo { font-family: "Space Grotesk", sans-serif; }

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.container { width: min(1120px, 90%); margin-inline: auto; }

/* ---------- Navigation ---------- */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.1rem 0;
  transition: var(--transition);
}
.nav.scrolled {
  background: rgba(247, 246, 242, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0.65rem 0;
}
.nav__inner { display: flex; align-items: center; justify-content: space-between; }
.nav__logo { font-size: 1.4rem; font-weight: 700; letter-spacing: 0.5px; }
.nav__logo span { color: var(--teal); }

.nav__menu { display: flex; gap: 1.9rem; list-style: none; }
.nav__link {
  position: relative;
  font-size: 0.93rem;
  font-weight: 500;
  color: var(--muted);
  transition: color var(--transition);
}
.nav__link::after {
  content: "";
  position: absolute;
  left: 0; bottom: -6px;
  width: 0; height: 2px;
  background: var(--gradient);
  border-radius: 2px;
  transition: width var(--transition);
}
.nav__link:hover, .nav__link.active { color: var(--ink); }
.nav__link:hover::after, .nav__link.active::after { width: 100%; }

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 6px;
}
.nav__toggle span { width: 24px; height: 2px; background: var(--ink); border-radius: 2px; transition: var(--transition); }

/* ---------- Hero ---------- */
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  position: relative;
  padding: 8rem 0 4rem;
}
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__bg::before {
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(600px 420px at 85% 15%, rgba(13, 148, 136, 0.10), transparent 65%),
    radial-gradient(500px 400px at 5% 85%, rgba(37, 99, 235, 0.08), transparent 65%);
}
.hero__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
}
.hero__pill {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.82rem; font-weight: 600;
  color: var(--teal-dark);
  margin-bottom: 1.4rem;
  box-shadow: var(--shadow);
}
.hero__pill-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.hero__headline {
  font-size: clamp(2.3rem, 5.4vw, 3.8rem);
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 1rem;
}
.hero__headline em {
  font-style: normal;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__title {
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  color: var(--muted);
  font-weight: 600;
  min-height: 2rem;
  margin-bottom: 1.2rem;
}
.hero__typed { color: var(--teal-dark); }
.caret {
  display: inline-block;
  width: 2px; height: 1.1em;
  background: var(--teal);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: blink 0.9s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.hero__blurb { color: var(--muted); max-width: 33rem; margin-bottom: 2rem; }
.hero__blurb strong { color: var(--ink); font-weight: 600; }

.hero__cta { display: flex; gap: 0.9rem; flex-wrap: wrap; margin-bottom: 2rem; }

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.8rem 1.7rem;
  border-radius: 999px;
  font-weight: 600; font-size: 0.95rem;
  font-family: inherit;
  transition: var(--transition);
  border: 1px solid transparent;
  cursor: pointer;
}
.btn--primary { background: var(--gradient); color: #fff; box-shadow: 0 8px 20px rgba(13, 148, 136, 0.3); }
.btn--primary:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(13, 148, 136, 0.4); }
.btn--ghost { border-color: var(--border); color: var(--ink); background: var(--surface); }
.btn--ghost:hover { border-color: var(--teal); transform: translateY(-3px); }
.btn--sm { padding: 0.6rem 1.25rem; font-size: 0.85rem; }

.hero__socials { display: flex; gap: 0.9rem; }
.hero__socials a {
  width: 44px; height: 44px;
  display: grid; place-items: center;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  transition: var(--transition);
}
.hero__socials a:hover {
  color: #fff;
  background: var(--gradient);
  border-color: transparent;
  transform: translateY(-4px);
}
.hero__socials svg { width: 20px; height: 20px; }

/* Hero photo */
.hero__photo { position: relative; justify-self: center; }
.hero__photo-ring {
  width: min(320px, 72vw);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  background: var(--gradient);
  animation: float 6s ease-in-out infinite;
  box-shadow: var(--shadow-lg);
}
.hero__photo-ring img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: var(--surface-2);
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
.hero__chip {
  position: absolute;
  bottom: 4%; left: -10%;
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.55rem 1.1rem;
  font-size: 0.82rem; font-weight: 600;
  box-shadow: var(--shadow-lg);
  animation: float 6s ease-in-out infinite reverse;
}
.hero__chip svg { width: 16px; height: 16px; color: var(--teal); }

/* ---------- Marquee ---------- */
.marquee {
  background: var(--ink);
  padding: 1rem 0;
  overflow: hidden;
}
.marquee__track {
  display: flex; align-items: center; gap: 2.4rem;
  width: max-content;
  animation: scrollX 28s linear infinite;
}
.marquee__track span {
  color: #cbd5e1;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}
.marquee__track i {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--teal);
  flex-shrink: 0;
}
@keyframes scrollX {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ---------- Sections ---------- */
.section { padding: 6rem 0; }
.section__head { text-align: center; margin-bottom: 3.2rem; max-width: 640px; margin-inline: auto; }
.section__eyebrow {
  color: var(--teal-dark);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 0.78rem;
  margin-bottom: 0.6rem;
}
.section__title { font-size: clamp(1.7rem, 3.6vw, 2.5rem); letter-spacing: -0.5px; line-height: 1.2; }
.section__sub { color: var(--muted); margin-top: 0.8rem; }

/* ---------- About ---------- */
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3rem;
  align-items: start;
}
.about__content p { color: var(--muted); margin-bottom: 1rem; }
.about__skills { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.4rem; }
.skill {
  padding: 0.45rem 1.05rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 0.86rem; font-weight: 500;
  color: var(--muted);
  transition: var(--transition);
}
.skill:hover {
  color: #fff;
  background: var(--gradient);
  border-color: transparent;
  transform: translateY(-3px);
}

/* ---------- How I Help ---------- */
.help { background: var(--surface); }
.help__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
}
.help__card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.9rem;
  transition: var(--transition);
}
.help__card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(13, 148, 136, 0.35); }
.help__card h3 {
  font-size: 1.15rem;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  color: var(--ink);
}
.help__card p { color: var(--muted); font-size: 0.94rem; margin-bottom: 1.2rem; }
.help__out {
  display: inline-block;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--teal-dark);
  background: rgba(13, 148, 136, 0.1);
  padding: 0.35rem 0.95rem;
  border-radius: 999px;
}

/* ---------- Projects ---------- */
.projects__filters {
  display: flex; justify-content: center; flex-wrap: wrap;
  gap: 0.6rem; margin-bottom: 2.4rem;
}
.filter-btn {
  padding: 0.5rem 1.35rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-family: inherit; font-size: 0.88rem; font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}
.filter-btn:hover { color: var(--ink); border-color: var(--teal); }
.filter-btn.active { background: var(--ink); border-color: var(--ink); color: #fff; }

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}
.project {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex; flex-direction: column;
  transition: var(--transition);
  position: relative;
}
.project:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.project.hidden { display: none; }

.project__media {
  position: relative;
  height: 195px;
  overflow: hidden;
  cursor: pointer;
  background: var(--surface-2);
}
.project__media img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.project:hover .project__media img { transform: scale(1.05); }

.project__zoom, .project__play {
  position: absolute;
  inset: 0;
  display: grid; place-items: center;
  background: rgba(22, 32, 47, 0.4);
  opacity: 0;
  transition: opacity var(--transition);
}
.project__zoom svg { width: 42px; height: 42px; color: #fff; }
.project__play svg { width: 54px; height: 54px; color: #fff; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.4)); }
.project__media:hover .project__zoom,
.project__media:hover .project__play,
.project__media:focus-visible .project__zoom,
.project__media:focus-visible .project__play { opacity: 1; }

.project__body { padding: 1.4rem 1.5rem 1.6rem; display: flex; flex-direction: column; flex: 1; }
.project__label {
  color: var(--teal-dark);
  font-size: 0.7rem; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.project__title { font-size: 1.08rem; margin-bottom: 0.5rem; line-height: 1.35; }
.project__desc { color: var(--muted); font-size: 0.9rem; flex: 1; margin-bottom: 1rem; }
.project__tags { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.2rem; }
.project__tags span {
  font-size: 0.72rem; font-weight: 600;
  padding: 0.22rem 0.7rem;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--muted);
}
.project__actions { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: auto; }

/* ---------- Research ---------- */
.research { background: var(--surface); }
.research__card {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 0;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
}
.research__card:hover { box-shadow: var(--shadow-lg); }
.research__media {
  position: relative;
  min-height: 300px;
  cursor: pointer;
  background: var(--surface-2);
  overflow: hidden;
}
.research__media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.research__body { padding: 2.2rem; display: flex; flex-direction: column; justify-content: center; }
.research__title { font-size: 1.5rem; margin-bottom: 0.7rem; }
.research__desc { color: var(--muted); margin-bottom: 1.2rem; }

/* ---------- Contact ---------- */
.contact__cta { text-align: center; max-width: 620px; margin: 0 auto 3.5rem; }
.contact__headline { font-size: clamp(1.9rem, 4vw, 2.8rem); letter-spacing: -0.5px; margin-bottom: 0.8rem; }
.contact__sub { color: var(--muted); margin-bottom: 1.8rem; }
.contact__cta-btns { display: flex; gap: 0.9rem; justify-content: center; flex-wrap: wrap; }

.contact__form {
  max-width: 720px;
  margin-inline: auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
}
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.form__group { margin-bottom: 1.1rem; }
.form__group label {
  display: block;
  font-size: 0.85rem; font-weight: 600;
  margin-bottom: 0.45rem;
  color: var(--muted);
}
.form__group input,
.form__group textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  color: var(--ink);
  font-family: inherit;
  font-size: 0.95rem;
  transition: var(--transition);
  resize: vertical;
}
.form__group input:focus,
.form__group textarea:focus {
  outline: none;
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
}
.form__group input.error, .form__group textarea.error { border-color: #e11d48; }
.form__submit { width: 100%; margin-top: 0.3rem; }

/* ---------- Footer ---------- */
.footer { border-top: 1px solid var(--border); padding: 1.8rem 0; background: var(--surface); }
.footer__inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; flex-wrap: wrap;
  color: var(--muted); font-size: 0.9rem;
}
.footer__socials { display: flex; gap: 1.5rem; }
.footer__socials a { transition: color var(--transition); font-weight: 500; }
.footer__socials a:hover { color: var(--teal-dark); }

/* ---------- Modal (slider + video) ---------- */
.modal {
  position: fixed; inset: 0;
  z-index: 200;
  display: grid; place-items: center;
  padding: 1.5rem;
  visibility: hidden; opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.modal.open { visibility: visible; opacity: 1; }
.modal__backdrop {
  position: absolute; inset: 0;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(6px);
}
.modal__card {
  position: relative;
  width: min(920px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: var(--surface);
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  transform: translateY(24px) scale(0.97);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.modal.open .modal__card { transform: translateY(0) scale(1); }

.modal__close {
  position: absolute;
  top: 14px; right: 14px;
  z-index: 5;
  width: 40px; height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(22, 32, 47, 0.8);
  color: #fff;
  cursor: pointer;
  display: grid; place-items: center;
  transition: var(--transition);
}
.modal__close:hover { background: #e11d48; transform: rotate(90deg); }
.modal__close svg { width: 18px; height: 18px; }

.modal__media {
  position: relative;
  height: min(440px, 46vh);
  background: var(--surface-2);
}
.modal__media img,
.modal__media video {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
}
.modal__media video { object-fit: contain; background: #0f172a; }

.modal__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 42px; height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(22, 32, 47, 0.75);
  color: #fff;
  cursor: pointer;
  display: grid; place-items: center;
  transition: var(--transition);
}
.modal__nav svg { width: 20px; height: 20px; }
.modal__nav:hover { background: var(--teal); }
.modal__nav--prev { left: 14px; }
.modal__nav--next { right: 14px; }
.modal__nav:disabled { opacity: 0.3; cursor: default; }

.modal__dots {
  position: absolute;
  bottom: 12px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 7px;
  z-index: 4;
}
.modal__dots button {
  width: 9px; height: 9px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: var(--transition);
  padding: 0;
}
.modal__dots button.active { background: #fff; transform: scale(1.3); }

.modal__body { padding: 1.7rem 2rem 2rem; }
.modal__title { font-size: 1.4rem; margin-bottom: 0.5rem; }
.modal__desc { color: var(--muted); margin-bottom: 1.1rem; }
.modal__actions { margin-top: 1.3rem; }
body.modal-open { overflow: hidden; }

/* ---------- Scroll reveal ---------- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ---------- Responsive ---------- */
@media (max-width: 960px) {
  .hero__inner { grid-template-columns: 1fr; text-align: center; }
  .hero__photo { order: -1; }
  .hero__cta, .hero__socials { justify-content: center; }
  .hero__blurb { margin-inline: auto; }
  .about__grid { grid-template-columns: 1fr; gap: 1.6rem; }
  .projects__grid { grid-template-columns: repeat(2, 1fr); }
  .research__card { grid-template-columns: 1fr; }
  .research__media { min-height: 240px; }
}

@media (max-width: 640px) {
  .projects__grid { grid-template-columns: 1fr; }
  .help__grid { grid-template-columns: 1fr; }
  .form__row { grid-template-columns: 1fr; }
  .nav__toggle { display: flex; }
  .nav__menu {
    position: fixed;
    top: 64px; right: -100%;
    flex-direction: column;
    gap: 0;
    width: min(280px, 80vw);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0 0 0 var(--radius);
    padding: 1rem 0;
    transition: right var(--transition);
    box-shadow: var(--shadow-lg);
  }
  .nav__menu.open { right: 0; }
  .nav__menu li { width: 100%; }
  .nav__link { display: block; padding: 0.85rem 1.6rem; }
  .nav__link::after { display: none; }
  .nav__menu.open .nav__link:hover { background: rgba(13, 148, 136, 0.08); }
  .section { padding: 4.2rem 0; }
  .hero__chip { left: 0; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
}
