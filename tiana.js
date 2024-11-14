const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const nav = document.querySelector(".nav");

openMenuBtn.addEventListener("click", () => {
  nav.style.left = "0";
  nav.style.opacity = "1";
  closeMenuBtn.style.display = "block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  nav.style.left = "-100%";
  nav.style.opacity = "0";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
});