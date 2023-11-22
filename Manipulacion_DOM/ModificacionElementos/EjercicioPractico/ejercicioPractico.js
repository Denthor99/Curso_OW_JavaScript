// Get Elements nos devuelve un HTMLCollection
// Por defecto no nos deja usar foreach, asi que usamos un for of
let imagen = document.getElementsByClassName("a");
for (img of imagen){
    img.style.border="5px solid #00F";
}

// Vamos a modificar los elementos que tenga la clase b
// En este caso, vamos a transformar esos elementos en array para usar un foreach
let imagenDos = document.getElementsByClassName("b");

Array.from(imagenDos).forEach(elemento => {
    elemento.style.border="5px solid black";
});

// Vamos a seleccionar un nodo
let imagenNodo = document.querySelector(".c");
// Le añadimos un estilo
imagenNodo.style.border="5px solid aquamarine";

// Ahora en vez de seleccionar por elementos, seleccionamos por nodo
// Nos permitirá usar foreach
let imagenNodos = document.querySelectorAll(".d");
imagenNodos.forEach(nodo=>{
    nodo.style.border="5px solid peru";
})