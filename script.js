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
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  /* ---------- Typing effect in hero ---------- */
  const typedEl = document.getElementById("typedText");
  const phrases = ["| Power BI", "| SQL", "| Python", "| DAX", "| Excel"];
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

  /* ---------- Project filtering ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("#projectsGrid .project");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      projectCards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !show);
        if (show) card.classList.add("visible");
      });
    });
  });

  /* ---------- Project modal: image slider + video ---------- */
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");
  const modalLabel = document.getElementById("modalLabel");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTags = document.getElementById("modalTags");
  const modalLink = document.getElementById("modalLink");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  const modalDots = document.getElementById("modalDots");

  let slides = [];   // available image paths (missing files are filtered out)
  let slideIdx = 0;

  function fileExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  function renderSlide() {
    if (!slides.length) return;
    modalImg.src = slides[slideIdx];
    modalImg.alt = modalTitle.textContent + " — page " + (slideIdx + 1);
    modalDots.querySelectorAll("button").forEach((d, i) =>
      d.classList.toggle("active", i === slideIdx)
    );
  }

  function buildDots() {
    modalDots.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", "Go to page " + (i + 1));
      dot.addEventListener("click", () => { slideIdx = i; renderSlide(); });
      modalDots.appendChild(dot);
    });
  }

  function showVideo(src) {
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = src;
    modalPrev.style.display = "none";
    modalNext.style.display = "none";
    modalDots.innerHTML = "";
  }

  function hideVideo() {
    modalVideo.style.display = "none";
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    modalImg.style.display = "block";
    modalPrev.style.display = "";
    modalNext.style.display = "";
  }

  async function openModal(card) {
    const d = card.dataset;
    modalLabel.textContent = d.label;
    modalTitle.textContent = d.title;
    modalDesc.textContent = d.desc;
    modalLink.href = d.link;
    modalTags.innerHTML = d.tags
      .split(",")
      .map((t) => `<span>${t.trim()}</span>`)
      .join("");

    // 1) If a video file exists, show it (preferred for multi-page walkthroughs)
    const videoOk = d.video ? await fileExists(d.video) : false;
    if (videoOk) {
      showVideo(d.video);
    } else {
      hideVideo();
      // 2) Otherwise show the image slider; skip missing screenshots
      const requested = (d.imgs || "").split(",").map((s) => s.trim()).filter(Boolean);
      const checks = await Promise.all(requested.map(fileExists));
      slides = requested.filter((_, i) => checks[i]);
      slideIdx = 0;
      const multi = slides.length > 1;
      modalPrev.style.display = multi ? "" : "none";
      modalNext.style.display = multi ? "" : "none";
      buildDots();
      renderSlide();
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    hideVideo();
  }

  modalPrev.addEventListener("click", () => {
    if (!slides.length) return;
    slideIdx = (slideIdx - 1 + slides.length) % slides.length;
    renderSlide();
  });
  modalNext.addEventListener("click", () => {
    if (!slides.length) return;
    slideIdx = (slideIdx + 1) % slides.length;
    renderSlide();
  });

  projectCards.forEach((card) => {
    const media = card.querySelector(".project__media");
    media.addEventListener("click", () => openModal(card));
    media.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card); }
    });
    card.querySelector(".project__view").addEventListener("click", () => openModal(card));
  });

  /* Research paper image also opens the modal */
  const researchMedia = document.getElementById("researchMedia");
  if (researchMedia) {
    const fakeCard = {
      dataset: {
        title: "Research Paper Publication",
        label: "IJISAE · PEER-REVIEWED",
        imgs: "images/research-paper.png",
        link: "https://ijisae.org/index.php/IJISAE/article/view/6860",
        desc: "Published research paper in the International Journal of Intelligent Systems and Applications in Engineering (IJISAE).",
        tags: "Research,Peer-Reviewed,IJISAE",
      },
    };
    researchMedia.addEventListener("click", () => openModal(fakeCard));
    researchMedia.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(fakeCard); }
    });
  }

  modal.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", closeModal)
  );
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") modalPrev.click();
    if (e.key === "ArrowRight") modalNext.click();
  });

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

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
