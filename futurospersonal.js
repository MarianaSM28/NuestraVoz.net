/*// Obtener el elemento de la superposición de brillo
const shineOverlay = document.querySelector('.shine-overlay');

// Obtener la imagen
const image = document.querySelector('#image-container img');

// Instanciar el objeto ColorThief
const colorThief = new ColorThief();

// Obtener los colores dominantes de la imagen
const colorPalette = colorThief.getPalette(image, 5); // Obtener una paleta de 5 colores

// Verificar si alguno de los colores dominantes es amarillo o naranja
const isYellowOrOrange = colorPalette.some(color => isYellow(color) || isOrange(color));

// Si se detecta amarillo o naranja, agregar la clase "shine" a la superposición de brillo
if (isYellowOrOrange) {
  shineOverlay.classList.add('shine');
}

// Función para verificar si un color es amarillo
function isYellow(color) {
  const [r, g, b] = color;
  return r > 200 && g > 200 && b < 100; // Valores de referencia para el color amarillo
}

// Función para verificar si un color es naranja
function isOrange(color) {
  const [r, g, b] = color;
  return r > 200 && g > 100 && g < 200 && b < 100; // Valores de referencia para el color naranja
}
*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
    content.classList.toggle("shift-content");
});

