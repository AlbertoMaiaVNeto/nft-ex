const hamburger = document.querySelector(".hamburger-nav");
const nav = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

