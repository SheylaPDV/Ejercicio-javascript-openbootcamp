// Enunciado del ejercicio:

// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
  nombre: "Sheyla",
  apellido: "Perez",
  edad: 32,
  altura: 1.7,
  eresDesarrollador: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior
const edadSheyla = datosPersonales.edad;
console.log(edadSheyla);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const nuevaLista = { ...datosPersonales };
console.log(nuevaLista);

const listaAmigos = [
  {
    nombre: "Sheyla",
    apellido: "Perez",
    edad: 32,
    altura: 1.7,
    eresDesarrollador: true,
  },
  {
    nombre: "Alberto",
    apellido: "Buenavida",
    edad: 31,
    altura: 1.76,
    eresDesarrollador: true,
  },
  {
    nombre: "Esther",
    apellido: "Perez",
    edad: 46,
    altura: 1.7,
    eresDesarrollador: false,
  },
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
listaAmigos.sort((a, b) => a.edad - b.edad);

console.log(listaAmigos);
