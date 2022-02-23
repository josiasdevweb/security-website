const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".menu-principal");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
hamburger.addEventListener("click", openMenu);

const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});