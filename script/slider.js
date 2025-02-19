let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = 3;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidesContainer = document.querySelector('.slides');

// Função para atualizar a posição do slider
function updateSlider() {
    const offset = -currentSlide * 100; // Move o slider para a esquerda
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Avança para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlider();
}

// Retrocede para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateSlider();
}

// Event listeners para os botões de navegação
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Avança automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);

// Variáveis para detectar o gesto de arrasto (swipe)
let startX = 0;
let isDragging = false;

// Eventos para dispositivos touch
slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slidesContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 50) { // Define uma sensibilidade para o gesto
        if (diffX > 0) {
            nextSlide(); // Arrastou para a esquerda
        } else {
            prevSlide(); // Arrastou para a direita
        }
        isDragging = false;
    }
});

slidesContainer.addEventListener('touchend', () => {
    isDragging = false;
});

// Eventos para mouse
slidesContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

slidesContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 50) { // Define uma sensibilidade para o gesto
        if (diffX > 0) {
            nextSlide(); // Arrastou para a esquerda
        } else {
            prevSlide(); // Arrastou para a direita
        }
        isDragging = false;
    }
});

slidesContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

slidesContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});





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

    });
});









// Adicione isso no seu arquivo JavaScript (script/href.js ou um novo arquivo)

document.addEventListener('DOMContentLoaded', function() {
    const empresaSection = document.querySelector('.empresa');
    const descricaoContainer = document.querySelector('.empresa .descricao-container');
    const imageInfoCorporation = document.querySelector('.empresa .image-info-corporation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                descricaoContainer.classList.add('animate-left');
                imageInfoCorporation.classList.add('animate-right');
                observer.unobserve(empresaSection); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.2// A animação começa quando 50% da seção está visível
    });

    observer.observe(empresaSection);
});


// Adicione isso no seu arquivo JavaScript (script/href.js ou um novo arquivo)

document.addEventListener('DOMContentLoaded', function() {
    const someProductsSection = document.querySelector('.some-products');
    const titleSomeProduct = document.querySelector('.some-products .title-some-product');
    const sliderProducts = document.querySelector('.some-products .slider');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titleSomeProduct.classList.add('animate-bottom');
                sliderProducts.classList.add('animate-bottom');
                observer.unobserve(someProductsSection); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.3 // A animação começa quando 50% da seção está visível
    });

    observer.observe(someProductsSection);
});



// Adicione isso no seu arquivo JavaScript (script/href.js ou um novo arquivo)

document.addEventListener('DOMContentLoaded', function() {
    const valoresSection = document.querySelector('.valores');
    const valoresContents = document.querySelectorAll('.valores .content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplicar animação da esquerda para os dois primeiros elementos
                valoresContents[0].classList.add('animate-left');
                valoresContents[1].classList.add('animate-left');

                // Aplicar animação da direita para os dois últimos elementos
                valoresContents[2].classList.add('animate-right');
                valoresContents[3].classList.add('animate-right');

                observer.unobserve(valoresSection); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.2 // A animação começa quando 50% da seção está visível
    });

    observer.observe(valoresSection);
});


// Adicione isso no seu arquivo JavaScript (script/href.js ou um novo arquivo)

document.addEventListener('DOMContentLoaded', function() {
    const rodapeSection = document.querySelector('.rodape');
    const rodapeContainer = document.querySelector('.rodape .rodape-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rodapeContainer.classList.add('animate-bottom');
                observer.unobserve(rodapeSection); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.3 // A animação começa quando 50% da seção está visível
    });

    observer.observe(rodapeSection);
});



