// Escondemos la tercera imagen
let hiddenImg = document.querySelector("img:nth-child(3)");
//hiddenImg.style.display="none";

// Añadimos un borde de color verde
hiddenImg.style.border="3px solid green";

// Añadimos a las imagenes dos clases definidas en el archivo .css
let images = document.querySelectorAll("img");
images.forEach(imagen =>{
    imagen.classList.add("border");
    imagen.classList.add("otraAltura");
});
