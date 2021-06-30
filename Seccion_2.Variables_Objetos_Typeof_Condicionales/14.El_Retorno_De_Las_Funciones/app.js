/* Funcion que retorna una valor aleatorio */
function obtenerAleatorio(){
    return Math.random();
}

console.log( "Funcion obtner numero aleatorio: ", obtenerAleatorio() + 10 );


function obtenerNombre(){
    return "Kevin";
}

console.log(obtenerNombre()+" Osorno");

/*Asignando el retorno a una variable*/
var name = obtenerNombre();
console.log(name);

function esMayor05(){
    if ( obtenerAleatorio() > 0.5){
        return true;
    } else {
        return false;
    }
}

if (esMayor05()){
    console.log("Es mayor a 0.5")
} else {
    console.log("Es menor que a 0.5");
}


/* Retornando un objeto anonimo, también podemos retornar un objeto explicito*/
function crearPersona(nombre, apellido){

    return {
      nombre: nombre,
      apellido: apellido
    }
}

var persona = crearPersona("Maria", "Paz");
console.log("Nombre persona creada: ", persona.nombre);
console.log("Apellido persona creada: ", persona.apellido);

/* Regresando una funcion anonima a partir de una funcion*/
function crearFuncion(){
    return function(nombre){
        console.log("Funcion Creada por ", nombre);
    }
}

var nuevaFuncion = crearFuncion();
nuevaFuncion(persona.nombre);
