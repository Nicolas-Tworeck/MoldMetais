function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    if (!obj) return;

    let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
            obj.classList.add('animated');
        }
    }, stepTime);
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let target = entry.target;
            if (!target.dataset.animated) {
                target.dataset.animated = "true"; // Evita que a animação ocorra mais de uma vez
                
                animateValue("area", 0, 1000, 1000);
                animateValue("fabricacao", 0, 1000, 1000);
                animateValue("produtos", 0, 1000, 1000);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver(handleIntersection, {
        root: null, // viewport
        threshold: 0.2, // Quando 20% do elemento estiver visível, ativa a animação
    });

    let targetElements = document.querySelectorAll("#area, #fabricacao, #produtos");
    targetElements.forEach(el => observer.observe(el));
});

document.addEventListener('scroll', function () {
    var empresaInfo = document.querySelector('.empresa-info-container');
    var empresaImage = document.querySelector('.empresa-image-container');
    
    var positionInfo = empresaInfo.getBoundingClientRect();
    var positionImage = empresaImage.getBoundingClientRect();

    // Verifica se a seção de texto e a imagem estão quase na tela
    if (positionInfo.top < window.innerHeight - 200) {
        empresaInfo.classList.add('show');
    }

    if (positionImage.top < window.innerHeight - 200) {
        empresaImage.classList.add('show');
    }
});


document.addEventListener('scroll', function () {
    var textHistory = document.querySelector('.text-history');
    var position = textHistory.getBoundingClientRect();

    // Verifica se a seção está quase na tela (por exemplo, 200px do final)
    if (position.top < window.innerHeight - 50) {
        textHistory.classList.add('show');
    }
});


document.addEventListener('scroll', function () {
    var ceoImage = document.querySelector('.ceo-image');
    var bio = document.querySelector('.bio');

    var positionImage = ceoImage.getBoundingClientRect();
    var positionBio = bio.getBoundingClientRect();

    // Verifica se a imagem está quase na tela
    if (positionImage.top < window.innerHeight - 200) {
        ceoImage.classList.add('show');
    }

    // Verifica se a biografia está quase na tela
    if (positionBio.top < window.innerHeight - 200) {
        bio.classList.add('show');
    }
});


document.addEventListener('scroll', function () {
    var rodapeContent = document.querySelectorAll('.rodape-content');

    rodapeContent.forEach(function (item) {
        var position = item.getBoundingClientRect();

        // Verifica se o item está quase visível na tela (200px antes de chegar ao final)
        if (position.top < window.innerHeight - 50) {
            item.classList.add('show');
        }
    });
});

