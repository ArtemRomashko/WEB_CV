document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Зупиняє стандартну дію посилання
            const url = this.getAttribute('href');
            document.body.classList.remove('loaded');  // Прибирає ефект завантаження
            setTimeout(function() {
                window.location.href = url;  // Переходить на нову сторінку після затримки
            }, 500);  // Затримка для плавного переходу
        });
    });
});
