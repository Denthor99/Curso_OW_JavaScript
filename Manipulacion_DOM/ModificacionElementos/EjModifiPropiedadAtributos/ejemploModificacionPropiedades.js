// Modificación de contenido html usando un id y la propiedad innerHTML
const inner = document.getElementById("inner");
inner.innerHTML="Hola a <b>Todos!!!</b>";

// Usando outerHTML modificamos el contenido html
const outer = document.getElementById("outer");
outer.outerHTML= "<ul><li>Así</li><li>o así</li></ul>";

// Con innerText modificamos el contenido (texto). Al ser texto plano, las etiquetas no se procesarán.
const text = document.getElementById("text");
text.innerText = "<b>Buenas</b>";

// Ahora haremos que en el elemento "inner"
inner.title="Saludos Internautas";

// Podemos cambiar el id
//inner.id = "saludo";