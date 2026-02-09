let index = 0;

function moveSlide(direction) {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  index = (index + direction + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}
