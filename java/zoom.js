const images = [
  'img/IMG3.jpeg',
  'img/IMG4.jpeg',
  'img/IMG5.jpeg'
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById('zoomModal');
  const zoomed = document.getElementById('zoomedImage');
  zoomed.src = images[currentIndex];
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('zoomModal').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('zoomedImage').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('zoomedImage').src = images[currentIndex];
}

// Carrossel básico mobile
let slideIndex = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  if (index < 0) slideIndex = slides.length - 1;
  else if (index >= slides.length) slideIndex = 0;
  else slideIndex = index;

  carousel.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

function prevSlide() {
  showSlide(slideIndex - 1);
}
function nextSlide() {
  showSlide(slideIndex + 1);
}

setInterval(() => {
  if (window.innerWidth <= 830) {
    nextSlide();
  }
}, 5000); // muda a cada 5s no mobile

// Modal Zoom
let currentZoomIndex = 0;

function openModal(index) {
  currentZoomIndex = index;
  const modal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  zoomedImage.src = slides[index].src;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('zoomModal').style.display = 'none';
}

function prevImage() {
  currentZoomIndex = (currentZoomIndex - 1 + slides.length) % slides.length;
}

