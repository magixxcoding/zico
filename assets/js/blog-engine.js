(() => {
  const search = document.querySelector("#post-search");
  const grid = document.querySelector("#post-grid");
  const emptyState = document.querySelector("#empty-state");

  if (search && grid && emptyState) {
    const cards = [...grid.querySelectorAll(".post-card")];
    const filterPosts = () => {
      const query = search.value.trim().toLowerCase();
      let visibleCount = 0;
      cards.forEach((card) => {
        const searchableText = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
        const visible = searchableText.includes(query);
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      emptyState.hidden = visibleCount !== 0;
    };

    search.addEventListener("input", filterPosts);
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName || "")) {
        event.preventDefault();
        search.focus();
      }
    });
  }

  const contactForm = document.querySelector("#contact-form");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const subject = String(data.get("subject")).trim();
    const message = String(data.get("message")).trim();
    const mailto = new URL("mailto:hello@zicobym2hb.example");
    mailto.searchParams.set("subject", `[Zico by M2HB] ${subject}`);
    mailto.searchParams.set("body", `From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = mailto.toString();
  });
})();
