(() => {
  const markHrDecorative = () => {
    document.querySelectorAll("hr").forEach((hr) => {
      hr.setAttribute("aria-hidden", "true");
      hr.setAttribute("role", "presentation");
    });
  };

  const improveHeaderlinkA11y = () => {
    document.querySelectorAll("a.headerlink").forEach((link) => {
      if (!link.getAttribute("aria-label")) {
        link.setAttribute("aria-label", "Permalink to this section");
      }
      if (!link.getAttribute("title")) {
        link.setAttribute("title", "Permalink to this section");
      }
    });
  };

  const preventDropdownJump = () => {
    document
      .querySelectorAll('a[data-bs-toggle="dropdown"][href="#"]')
      .forEach((link) => {
        link.addEventListener("click", (event) => event.preventDefault());
      });
  };

  document.addEventListener("DOMContentLoaded", () => {
    markHrDecorative();
    improveHeaderlinkA11y();
    preventDropdownJump();
  });
})();

