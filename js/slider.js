document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");

  if (!track || slides.length === 0) return;

  let index = 0;

  window.moveSlide = function (direction) {
    index += direction;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    track.style.transform = `translateX(-${index * 100}%)`;
  };
});
