/* ¿Que tipo de dato puedo ingresar en una variable de JavaScript? Existen dos
tipos, los primitivos y los objetos.

Un ejemplo de un tipo primitivo son los siguientes:
*/

var num = 10;           //Entero, int
var str = "Kevin";      // Cadenas de texto, strings
var bol = true;         // Booleano.
var und = undefined;    // Indefinido
var nul = null;         // Nulo


num = str;        //Tipado dinamico
bol = 10;         //Cambiando de tipo

console.log(num);
console.log(bol);

/*Ahora observando los objetos, un objeto puede ser una colección de tipos primitivos,
incluso de los objetos. Sin embargo, dentro de los objetos, todo está dentro de una
"nomenclatura de pares", cada uno de los detalles que se coloque dentro del objeto,
debe tener un par. */

var obj = {
  numero: 10,
  texto: "Kevin",
  objHijo: {
    numero2: 20,
    text2: "Nuevo Texto"
  }
};

console.log(obj);
