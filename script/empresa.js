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
