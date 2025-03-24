document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });


  overlay.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
