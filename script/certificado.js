document.addEventListener('scroll', function () {
    var certificados = document.querySelectorAll('.grid-certificado');

    certificados.forEach(function (certificado) {
        var position = certificado.getBoundingClientRect();

        if (position.top < window.innerHeight - 200) {
            certificado.classList.add('visible');
        }
    });
});