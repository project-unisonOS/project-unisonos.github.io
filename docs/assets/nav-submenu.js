// Enable nested dropdown menus in the top navbar.
// MkDocs' Bootstrap-based theme generates `.dropdown-submenu` elements, but
// Bootstrap 5 doesn't provide submenu toggle behavior by default.

function closeSiblingSubmenus(parentMenu, keepMenu) {
  if (!parentMenu) return;
  for (const submenu of parentMenu.querySelectorAll(":scope > .dropdown-submenu > .dropdown-menu.show")) {
    if (submenu !== keepMenu) submenu.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (const trigger of document.querySelectorAll(".dropdown-submenu > a")) {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const li = trigger.closest(".dropdown-submenu");
      if (!li) return;

      const submenu = li.querySelector(":scope > .dropdown-menu");
      if (!submenu) return;

      const parentMenu = li.closest(".dropdown-menu");
      closeSiblingSubmenus(parentMenu, submenu);

      submenu.classList.toggle("show");
    });
  }

  // When a top-level dropdown closes, close any open submenus within it.
  for (const topDropdown of document.querySelectorAll(".nav-item.dropdown")) {
    topDropdown.addEventListener("hide.bs.dropdown", () => {
      for (const submenu of topDropdown.querySelectorAll(".dropdown-submenu > .dropdown-menu.show")) {
        submenu.classList.remove("show");
      }
    });
  }
});

