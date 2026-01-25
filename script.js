function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".menu-overlay");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  overlay.classList.toggle("open");
}
