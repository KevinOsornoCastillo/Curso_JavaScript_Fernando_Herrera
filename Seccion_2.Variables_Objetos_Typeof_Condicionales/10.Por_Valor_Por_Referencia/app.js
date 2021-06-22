
/* En los valores primitivos, se pasan por valor */
var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;
console.log("a: ", a);
console.log("b: ", b);

var c = {
  nombre:"Juana"
};
var d = c;

console.log("c: ", c);
console.log("d: ", d);

/*Al cambiar la propiedad nombre del objeto c, se observa que el objeto d también
cambia, al igual que si cambio el objeto d, el objeto c cambia. Se nota como si
estuvieran "amarrados" los dos objetos, a esto se le conoce como valor por
referencia, y es que al declarar un objeto d = c, la variable d apunta al espacio
de memoria de c.*/

c.nombre = "Maria";
console.log("c: ", c);
console.log("d: ", d);
