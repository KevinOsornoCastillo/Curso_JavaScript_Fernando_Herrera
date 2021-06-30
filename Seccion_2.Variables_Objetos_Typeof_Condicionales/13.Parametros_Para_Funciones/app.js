

function imprimir( nombre, apellido ){

  apellido = apellido || "xxx";

  // if( apellido === undefined ){
  //   apellido = "XXX";
  // }
  console.log( nombre + " " + apellido);
}

/* Enviando variables anonimas */
/* Si no se envía algún parametro, JavaScript lo toma como un
undefined, debido a que el al "barrer" el archivo, asigna un
espacio de memoria para los parametros */
imprimir( "kevin", "osorno");

function imprimir1( persona ){
  console.log(persona.nombre + " " + persona.apellido);
  persona.nombre = "Maria";
}

var persona = {
  nombre: "juan",
  apellido: "Osorno"
}

imprimir1(persona);
console.log(persona);

/* Enviando una function a una function*/
/* Recibiendo una función anonima */
function imprimir2(fn){
  fn();
}

var miFuncion = function(){
  console.log("Funcion explicita: miFuncion");
}

/* Enviando una funcion explicita */
imprimir2(miFuncion);

/* Enviando una funcion anonima */
imprimir2( function(){
  console.log("Función anonima")
});
