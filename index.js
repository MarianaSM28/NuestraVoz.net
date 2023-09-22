window.onload = function() {
    var images = document.querySelectorAll('nav img');
    var isBright = false;

    setInterval(function() {
        if (isBright) {
            images.forEach(function(image) {
                image.style.filter = 'brightness(100%)';
            });
        } else {
            images.forEach(function(image) {
                image.style.filter = 'brightness(50%)';
            });
        }

        isBright = !isBright;
    }, 1000); // Cambia el valor para ajustar la velocidad del brillo
};

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
    content.classList.toggle("shift-content");
});

