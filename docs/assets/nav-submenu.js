// Enable nested dropdown menus in the top navbar.
// MkDocs' Bootstrap-based theme generates `.dropdown-submenu` elements, but
// Bootstrap 5 doesn't provide submenu toggle behavior by default.

function closeSiblingSubmenus(parentMenu, keepMenu) {
  if (!parentMenu) return;
  const siblings = parentMenu.querySelectorAll(".dropdown-submenu > .dropdown-menu.show");
  for (const submenu of siblings) {
    if (submenu !== keepMenu) submenu.classList.remove("show");
  }
}

function findDirectChildMenu(container) {
  if (!container) return null;
  for (const child of Array.from(container.children)) {
    if (!(child instanceof HTMLElement)) continue;
    if (child.classList.contains("dropdown-menu")) return child;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Use a capturing listener so we reliably intercept before Bootstrap's
  // document-level dropdown handlers.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const trigger = target.closest(".dropdown-submenu > a");
      if (!trigger) return;

      event.preventDefault();
      event.stopPropagation();

      const li = trigger.closest(".dropdown-submenu");
      if (!li) return;

      const submenu = findDirectChildMenu(li);
      if (!submenu) return;

      const parentMenu = li.closest(".dropdown-menu");
      closeSiblingSubmenus(parentMenu, submenu);

      submenu.classList.toggle("show");
    },
    true,
  );

  // When a top-level dropdown closes, close any open submenus within it.
  for (const topDropdown of document.querySelectorAll(".nav-item.dropdown")) {
    topDropdown.addEventListener("hide.bs.dropdown", () => {
      for (const submenu of topDropdown.querySelectorAll(".dropdown-submenu > .dropdown-menu.show")) {
        submenu.classList.remove("show");
      }
    });
  }
});
