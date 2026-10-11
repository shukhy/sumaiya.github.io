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

  /* ---------- Project modal ---------- */
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImg");
  const modalLabel = document.getElementById("modalLabel");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTags = document.getElementById("modalTags");
  const modalLink = document.getElementById("modalLink");

  function openModal(card) {
    const d = card.dataset;
    modalImg.src = d.img;
    modalImg.alt = d.title + " preview";
    modalLabel.textContent = d.label;
    modalTitle.textContent = d.title;
    modalDesc.textContent = d.desc;
    modalLink.href = d.link;
    modalTags.innerHTML = d.tags
      .split(",")
      .map((t) => `<span>${t.trim()}</span>`)
      .join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  projectCards.forEach((card) => {
    card.querySelector(".project__media").addEventListener("click", () => openModal(card));
    card.querySelector(".project__media").addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card); }
    });
    card.querySelector(".project__view").addEventListener("click", () => openModal(card));
  });

  modal.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", closeModal)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
