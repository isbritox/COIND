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
