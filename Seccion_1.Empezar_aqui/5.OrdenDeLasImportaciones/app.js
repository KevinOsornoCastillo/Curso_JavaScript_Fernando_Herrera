

/*
Es muy comun declarar en JavaScript variables que se guardan en el objeto global
pero puede traer varios problemas.
*/
var nombre = "Kevin";

/* Si en el archivo index.html instanciamos primero el archivo app.js y luego
app2.js, JavaScript ejecuta bien el programa, a pesar de que la declaración y
la impresión de la variable se encuentra en diferente archivos.*/

/*En cambio, si instanciamos primero app2.js y luego app.js, no se encuentra la
variable en el objeto global de app2.js, por lo que hay un error de contexto*/ 
