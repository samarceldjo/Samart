
//  Navigation menu
const navLinks = document.querySelector(".nav-links");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    navLinks.style.left = 0;
    navLinks.style.transition = 0.8 + 's';
});

closeMenu.addEventListener("click", () => {
    navLinks.style.left = -270 + "px";
});

//---------------------------------------------------------
