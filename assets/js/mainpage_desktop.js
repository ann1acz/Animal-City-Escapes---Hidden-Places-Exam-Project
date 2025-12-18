const prev = document.querySelector("#left");
const next = document.querySelector("#right");

let carouselVp = document.querySelector("#carousel-vp");
let cCarouselInner = document.querySelector("#cCarousel-inner");

// Clone all carousel items to create infinite loop
const originalItems = Array.from(document.querySelectorAll(".cCarousel-item"));
const totalItems = originalItems.length;

// Clone items and append them multiple times for seamless looping
originalItems.forEach(item => {
  const clone = item.cloneNode(true);
  cCarouselInner.appendChild(clone);
});

let currentIndex = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
  
  // Reset position when reaching the cloned section
  if (currentIndex < 0) {
    setTimeout(() => {
      cCarouselInner.style.transition = "none";
      currentIndex = totalItems - 1;
      cCarouselInner.style.left = -currentIndex * totalMovementSize + "px";
      setTimeout(() => {
        cCarouselInner.style.transition = "0.3s ease-in-out";
      }, 50);
    }, 300);
  }
});

next.addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
  
  // Reset position when reaching the end of original items
  if (currentIndex >= totalItems) {
    setTimeout(() => {
      cCarouselInner.style.transition = "none";
      currentIndex = 0;
      cCarouselInner.style.left = "0px";
      setTimeout(() => {
        cCarouselInner.style.transition = "0.3s ease-in-out";
      }, 50);
    }, 300);
  }
});

function updateCarousel() {
  const leftValue = -currentIndex * totalMovementSize;
  cCarouselInner.style.left = leftValue + "px";
}

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
