const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const backdrop = document.querySelector(".backdrop");

if (menuBtn.classList.contains("is-active")) menu.style.left = "0%";
menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("is-active")) {
    menu.style.left = "-100%";
  } else menu.style.left = "0%";
  menuBtn.classList.toggle("is-active");
});

backdrop.addEventListener("click", () => {
  menu.style.left = "-100%";
  menuBtn.classList.remove("is-active");
});
