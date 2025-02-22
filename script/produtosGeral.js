
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