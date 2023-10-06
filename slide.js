const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentSlide * 100 + "%";
    slider.style.transform = `translateX(${translateX})`;
}



// // Automatically switch slides every 3 seconds (adjust the interval as needed)
setInterval(nextSlide, 5000);



document.getElementById("prevButton").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

document.getElementById("nextButton").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});



