// javascript.js

const hamburgerIcon = document.querySelector(".hamburger-menu");
const hamburgerContent = document.querySelector(".hamburger-menu-content");

hamburgerIcon.addEventListener("click", () => {
  hamburgerContent.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !hamburgerIcon.contains(event.target) &&
    !hamburgerContent.contains(event.target)
  ) {
    hamburgerContent.classList.remove("active");
  }
});
