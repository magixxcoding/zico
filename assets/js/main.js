(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const savedTheme = localStorage.getItem("fieldnotes-theme");

  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.dataset.theme = "dark";
  }

  const updateThemeButton = () => {
    if (!themeButton) return;
    const dark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    themeButton.title = `Switch to ${dark ? "light" : "dark"} theme`;
  };

  updateThemeButton();
  themeButton?.addEventListener("click", () => {
    const dark = root.dataset.theme !== "dark";
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    localStorage.setItem("fieldnotes-theme", dark ? "dark" : "light");
    updateThemeButton();
  });

  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav?.classList.toggle("is-open", !expanded);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const articleCover = document.querySelector(".article .article-cover");
  if (articleCover) {
    let shareNav = articleCover.nextElementSibling;
    if (!shareNav?.matches(".article-share")) {
      shareNav = document.createElement("nav");
      shareNav.className = "article-share";
      shareNav.setAttribute("aria-label", "Share this article");

      const label = document.createElement("span");
      label.className = "article-share-label";
      label.textContent = "Share";
      shareNav.append(label);

      const platforms = [
        {
          name: "X",
          key: "x",
          endpoint: "https://twitter.com/intent/tweet",
          icon: "M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.4l4.5 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"
        },
        {
          name: "Facebook",
          key: "facebook",
          endpoint: "https://www.facebook.com/sharer/sharer.php",
          icon: "M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z"
        },
        {
          name: "LinkedIn",
          key: "linkedin",
          endpoint: "https://www.linkedin.com/sharing/share-offsite/",
          icon: "M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.4v1.6h.1A3.8 3.8 0 0 1 16.1 8c3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-6.7c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H9.2V9Z"
        }
      ];

      platforms.forEach(({ name, key, endpoint, icon }) => {
        const link = document.createElement("a");
        link.className = "article-share-link";
        link.dataset.share = key;
        link.href = endpoint;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Share on ${name}`);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", icon);
        svg.append(path);
        link.append(svg);
        shareNav.append(link);
      });

      articleCover.after(shareNav);
    }

    const shareUrl = window.location.href;
    const shareTitle = document.title;
    shareNav.querySelectorAll("[data-share]").forEach((link) => {
      const platform = link.dataset.share;
      const url = new URL(link.href);
      if (platform === "x") {
        url.searchParams.set("url", shareUrl);
        url.searchParams.set("text", shareTitle);
      } else if (platform === "facebook" || platform === "linkedin") {
        url.searchParams.set(platform === "facebook" ? "u" : "url", shareUrl);
      }
      link.href = url.toString();
    });
  }
})();
