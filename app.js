let parrafo = document.createElement("p");
let seccion = prompt("Ingrese la palabara INICIO para ir a dicha seccion o ingrese la palabra CARRITO para ver su compra");

if(seccion === "INICIO"){
    parrafo.innerHTML = "<h1>Seccion INICIO</h1>"
}
else if(seccion === "CARRITO"){
    parrafo.innerHTML = "<h1>Estas en CARRITO, aqui puedes ver los articulos agregados</h1>"
}
else{
    parrafo.innerHTML = "<h1>Entre Apuntes</h1>"
}

document.body.append(parrafo);