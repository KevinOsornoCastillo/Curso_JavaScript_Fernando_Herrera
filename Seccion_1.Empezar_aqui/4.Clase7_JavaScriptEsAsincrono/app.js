
/*
JavaScript no es asincrono, hace todo secuencialmente. Para ello se comprueba
colocando a imprimir un número determinado de veces un valor, y al mismo tiempo
mediante una llamada a la acción (onclick), se desea imprimir otro valor. Como
se observa en el navegador, hasta que no se termine de recorrer el ciclo, no
se imprime el valor del onclick, demostrando así que JavaScript no es asíncrono.

Lo que hace JavaScript es que cuando se realiza la llamada a la acción onClick,
esto cae en una "pila" de "stack", un lugar en donde están las funciones y
procesos que están esperando para ejecutarse.
*/

function imprimir(){
  for (var i = 0; i < 8000; i++){
    console.log("Imprimio");
  }
}

function presionoClick(){
  console.log("Click en Boton");
}

//Invocando la funcion
imprimir();
