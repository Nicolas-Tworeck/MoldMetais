let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Função para atualizar a posição do slider
function updateSlider() {
    const offset = -currentSlide * 100; // Move o slider para a esquerda
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Avança para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlider();
}

// Retrocede para o slide anterior
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateSlider();
});

// Avança para o próximo slide quando o botão de próxima for clicado
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlider();
});

// Avança automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);

