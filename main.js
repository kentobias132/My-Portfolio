const responsiveMenuButton = document.getElementById("responsive-icon-btn");
const navMenu = document.getElementById('menu-list');

responsiveMenuButton.addEventListener("click", () => {
  responsiveMenuButton.classList.toggle("open");
  navMenu.classList.toggle('active')
});


