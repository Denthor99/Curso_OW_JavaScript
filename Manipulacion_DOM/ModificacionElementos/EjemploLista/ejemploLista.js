// Añadimos en una variable el elemento cuyo id sea "special"
//let special = document.getElementById("special");

// El elemento será de color rojo. Se le aplicará un estilo
//special.style.color = 'red';

// Mostramos por consola
//console.log(special);

// Seleccionamos un elemento inexistente
//let elemento = document.getElementById("prueba");

// Realizamos una comprobación. Añadimos un id
// if (!elemento){
//     console.error(elemento+" no existe");
// } else {
//     console.log(elemento);
// }

// Añadimos un borde al div que contiene la lista
let divLista = document.getElementsByClassName("container");
divLista[0].style.border="2px solid black";
divLista[0].style.borderRadius="20px";
// Ahora obtenemos todos los elementos de tipo lista 
let listaElementos = document.querySelectorAll("li");
console.log(listaElementos);

// Iteramos en la lista de elementos, modificando el tamaño de la fuente y el color a verde
listaElementos.forEach(item=>{
    item.style.fontSize="2em";
    item.style.color="green";
});