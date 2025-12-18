// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu with close button
closeMenu.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
