const slides = document.querySelectorAll('.slide');
console.log(slides);

function cleanActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        cleanActiveClass();
        slide.classList.add('active');
    });
    })