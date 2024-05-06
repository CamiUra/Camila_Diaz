let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.querySelector(".carrusel_dentro");
    const totalImages = carouselInner.children.length;
    const shift = -100 * currentIndex;
    carouselInner.style.transform = `translateX(${shift}%)`;
}

function openImage(url) { /*Esto sirve para que la imagen al hacer click abra una ventana*/
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
});
const carousel = new bootstrap.Carousel('#myCarousel')
