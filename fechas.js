// Enunciado del ejercicio:

// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaDeHoy = new Date();
console.log(fechaDeHoy);

// - La fecha de tu nacimiento
const fechaDeNacimiento = new Date(1991, 3, 4);
console.log(fechaDeNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaDeHoy.getTime() > fechaDeNacimiento.getTime());

// - Una variable que contenga el día de tu nacimiento
console.log(fechaDeNacimiento.getDate());

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaDeNacimiento.getMonth(+1));

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(fechaDeNacimiento.getFullYear());
