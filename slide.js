const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function showSlide(index) {
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds

showSlide(currentIndex);
