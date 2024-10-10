const images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg']; // Массив изображений
let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicatorsContainer = document.getElementById('indicators');

function updateImage() {
    sliderImage.src = images[currentIndex];
    updateIndicators();
}

function updateIndicators() {
    indicatorsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateImage();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Инициализация
updateImage();