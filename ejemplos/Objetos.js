//  Trabajando con objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "Gonzalez",
  isDeveloper: true,
  libros_favoritos: ["El metodo", "Codigo"],
  "4-juegos": [1, 2, 3],
};

console.log(obj.apellido);
console.log(obj["4-juegos"]);

// Para acceder a propiedades a traves de variables
const prop = "isDeveloper";
console.log(obj[prop]); //true

// De esta forma se modifican ambos objetos.
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj2.nombre); //Iñigo

console.log(obj.nombre); //Iñigo

// Para no modificar el original, haremos una copia con el factor de propagacion

const obj3 = { ...obj };

console.log(obj.nombre); // Iñigo
console.log(obj3.nombre); //Iñigo

obj3.nombre = "Gorka";
console.log(obj.nombre); // Iñigo
console.log(obj3.nombre); //Gorka

// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
  { titulo: " lo que el viento se llevo", anyo: 1998 },
  { titulo: " Titanic", anyo: 1991 },
  { titulo: " Mohana", anyo: 1921 },
];

// .sort() => MUTA EL VALOR DE LA LISTA

listaPeliculas.sort((a, b) => a.anyo - b.anyo);
