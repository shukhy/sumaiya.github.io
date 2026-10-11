/* ============================================================
   Sumaiya Akter Shukhy — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Sticky nav on scroll ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
  navMenu.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => navMenu.classList.remove("open"))
  );

  /* ---------- Smooth scroll (with header offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ---------- Active nav link highlighting ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  const highlight = () => {
    const pos = window.scrollY + 120;
    sections.forEach((sec) => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + sec.id)
        );
      }
    });
  };
  window.addEventListener("scroll", highlight, { passive: true });
  highlight();

  /* ---------- Scroll-reveal animations ---------- */
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  /* ---------- Typing effect in hero ---------- */
  const typedEl = document.getElementById("typedText");
  const phrases = ["| Power BI", "| SQL", "| Python", "| DAX", "| Data Visualization"];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  (function type() {
    const phrase = phrases[phraseIdx];
    typedEl.textContent = phrase.slice(0, charIdx);
    let delay = deleting ? 45 : 95;
    if (!deleting && charIdx === phrase.length) { delay = 1400; deleting = true; }
    else if (deleting && charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 350; }
    else charIdx += deleting ? -1 : 1;
    setTimeout(type, delay);
  })();

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    // reset previous errors
    form.querySelectorAll(".error").forEach((f) => f.classList.remove("error"));

    if (name.length < 2) { markInvalid(form.name); valid = false; }
    if (!emailRe.test(email)) { markInvalid(form.email); valid = false; }
    if (message.length < 10) { markInvalid(form.message); valid = false; }

    if (!valid) {
      alert("⚠️ Please fill in all fields correctly.\n- Name: at least 2 characters\n- Email: a valid address\n- Message: at least 10 characters");
      return;
    }

    alert(`✅ Thank you, ${name}! Your message has been noted.\nI'll get back to you at ${email} soon.`);
    form.reset();
  });

  function markInvalid(field) {
    field.classList.add("error");
    field.addEventListener("input", () => field.classList.remove("error"), { once: true });
  }

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
