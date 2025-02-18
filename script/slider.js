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





document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider'); // Seleciona todos os sliders

    sliders.forEach((slider, index) => {
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let currentIndex = 0;

        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        const slidesContainer = slider.querySelector('.slides');

        // Função para atualizar a posição do slider
        function updateSliderPosition() {
            const offset = -currentIndex * 100; // Move o slider para a esquerda
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        // Avança para o próximo slide
        function showNextSlide() {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSliderPosition();
        }

        // Retrocede para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            updateSliderPosition();
        });

        // Avança para o próximo slide quando o botão de próxima for clicado
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSliderPosition();
        });

        // Avança automaticamente a cada 5 segundos
        setInterval(showNextSlide, 5000);
    });
});



//  menu hamburguer
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

// Abrir ou fechar o menu ao clicar no botão hambúrguer
hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuMobile.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // Fechar o menu apenas se o clique não for no menu nem no botão
    if (!isClickInsideMenu && !isClickOnHamburger && menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
    }
});