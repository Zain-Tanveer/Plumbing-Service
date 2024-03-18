const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");

navToggle.addEventListener("click", (e) => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);

  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  if (primaryNav.hasAttribute("data-visible")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "initial";
  } else {
    hamburgerIcon.style.display = "initial";
    closeIcon.style.display = "none";
  }

  document.body.style.overflow =
    document.body.style.overflow == "hidden" ? "auto" : "hidden";
});
