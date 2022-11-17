// - Una variable que contenga tu altura en centímetros (entero)

let altura = 170;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaEnMetros = 1.7;
console.log(alturaEnMetros);

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 59.5;
console.log(peso);

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeadaArriba = Math.ceil(alturaEnMetros);
console.log(alturaRedondeadaArriba);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(peso);
console.log(pesoRedondeado);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let maximoValor = Number.MAX_VALUE;
console.log(
  "el máximo valor que se puede obtener en Javascript: ",
  maximoValor
);
