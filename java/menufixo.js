const navbar = document.getElementById('navbar');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const menu = document.getElementById('menuLinks');

function toggleMenu() {
  const isOpen = menu.style.display === 'flex';
  menu.style.display = isOpen ? 'none' : 'flex';
  hamburgerIcon.classList.toggle('active', !isOpen);
}

document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    menu.style.display = 'none';
    hamburgerIcon.classList.remove('active');
  }
});

window.addEventListener('scroll', function () {
  if (!navbar) return; // Evita erro se navbar não existir
  const navbarBottom = navbar.getBoundingClientRect().bottom;
  if (navbarBottom < 0) {
    hamburgerIcon.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'none';
    menu.style.display = 'none';
    hamburgerIcon.classList.remove('active');
  }
});
