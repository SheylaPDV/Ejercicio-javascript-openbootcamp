// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["tomate", "salmon", "lechuga", "carabineros", "arroz"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de girasol");
console.log(compra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();
console.log(compra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  { titulo: "Gladiator", director: "Ridley Scott", fecha: 2009 },
  {
    titulo: "Interestellar",
    director: "Christopher Nolan",
    fecha: 2014,
  },
  {
    titulo: "Focus",
    director: "Glenn Ficarra",
    fecha: 2015,
  },
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasFiltradas = peliculas.filter((obj) => obj.fecha >= 2010);
console.log(peliculasFiltradas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((obj) => obj.director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((obj) => obj.titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosPeliculas = ["Focus", "Gladiator", "Interestellar"];
const directoresPeliculas = [
  "Glenn Ficarra",
  "Christopher Nolan",
  "Ridley Scott",
];

const nuevaLista = titulosPeliculas.concat(directoresPeliculas);
console.log(nuevaLista);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const nuevaLista2 = [...titulosPeliculas, ...directoresPeliculas];
console.log(nuevaLista2);
