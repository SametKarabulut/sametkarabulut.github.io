const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);