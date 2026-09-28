let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
}

function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);
