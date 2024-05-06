let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.querySelector(".carrusel_dentro");
    const totalImages = carouselInner.children.length;
    const shift = -100 * currentIndex;
    carouselInner.style.transform = `translateX(${shift}%)`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function openImage(url) {
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
});
