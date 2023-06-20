// Sets o conjuntos
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, { id: 5 }, { id: 5 }];

const mySet = new Set(array);

console.log(array); // [1,2,3,4,5,6,1,2,3,{id: 5},{id: 5}]
console.log(mySet); // Set {1,2,3,4,5,6,{id: 5},{id: 5}}, no nos permite almacenar elementos que ya existen, siempre son unicos. En el caso de el objeto id la referencia es distinta.

//  .add() añadiur valores en los sets
miSet.add(9);
console.log(miSet);

// .delete() Eliminar valores en los sets

miSet.delete(4);

// .clear() Borrar todo
miSet.clear();

// .has() Buscar elemento especifico
console.log(array.includes(2)); // true
console.log(miSet.has(4)); //true

//  y con la propiedad (no metodo) .size, puedes saber el tamaño del set
console.log(miSet.size); // 8

miSet.forEach((valor) => {
  console.log(valor); // 1,2,3,4,5,6....
});

// obtener valores del set (objeto iterator)
const it_miSet = miSet.values();
console.log(it_miSet); // {[Iterator]}

// Convertir el set en un array con factor de propagacion
const ar_miSet = [...miSet];
console.log(ar_miSet[1]);
