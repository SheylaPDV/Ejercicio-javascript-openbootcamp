const fecha = new Date();
console.log(fecha);

// Los meses inicializan en 0 (0- Enero, 11- Diciembre)
const fecha2 = new Date(1991, 3, 3, 1, 23, 43, 192);
console.log(fecha2);

const fecha3 = new Date(-10000000); // Milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1991 12:15:11");
console.log(fecha4);

console.log(fecha < fecha2);

// Obtener el dia, el mes y el año de una fecha

const fecha5 = new Date(1991, 3, 3, 1, 23, 43, 192);
console.log(fecha5);

console.log(fecha2 === fecha5); // Error, no se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // Ok, Esta es la forma de comparar la igualdad entre fechas. Este metodo lo pasa a milisegundos

// Obtener el dia .getDate()

console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0 - Enero, 11 - Dciembre)
console.log(fecha2.getMonth());

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocaleDateString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/reference/Global_Objects/Date/ToLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"));
