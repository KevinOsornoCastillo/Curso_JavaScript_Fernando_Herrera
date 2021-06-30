var persona = {
  nombre: "Kevin",
  apellido: "Osorno",
  edad: 25,
  direccion: {
    pais: "Colombia",
    ciudad: "Medellin",
	edificio: {
		nombre: "Edificio central",
		telefono: "578 08 61"
	}
  }
};

/* Obteniendo propiedades de los objetos */
console.log(persona.direccion)

/* Obteniendo propiedad de un objeto dentro de un objeto */
console.log(persona.direccion.pais);
console.log(persona.direccion.ciudad);

/* Agregando una nueva propiedad a un objeto */
persona.direccion.zipcode = 11101;
persona.altura = 3;
console.log(persona);
console.log(persona.direccion);

/* Obteniendo el numero de telefono del objeto edificio */

/*
** De esta forma se obtiene el valor de la propiedad telefono,
** sin embargo esta manera es muy larga para obtener este valor.
*/
console.log("Telefono: ", persona.direccion.edificio.telefono);

/* Creando una variable que apunte a la direccion de memoria del
objeto edificio. */
var edificio = persona.direccion.edificio;
edificio.nopiso = '7vo piso';

console.log("Objeto Edificio: ", edificio);
console.log("Imprimiendo el objeto padre (persona): ", persona);



/************************ Notacion Corchete ***************************/

/* Es bastante útil a la hora de traer datos de manera DINAMICA, por ejemplo,
el campo de un formulario. */

var campo_name = "nombre";
console.log("Accediendo a valores con notacion corchete: ", persona[campo_name]);
