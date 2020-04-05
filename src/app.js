// Just using JS to toggle the aria expanded attr of the hamburger icon and css is used to show and hide the menu

// Toggling the menu
function toggleMenu(e) {
  const menuExpanded = hamburger.getAttribute("aria-expanded");
  if (menuExpanded === "true") {
    hamburger.setAttribute("aria-expanded", false);
  } else {
    hamburger.setAttribute("aria-expanded", "true");
  }
}
const mainNav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".main-nav-item");
hamburger.addEventListener("click", toggleMenu);

// Add event lister to toggle menu closed when item is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", false);
  });
});

mainNav.addEventListener("focusout", () =>
  hamburger.setAttribute("aria-expanded", false)
);
