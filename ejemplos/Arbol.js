function Arbol(altura) {
  const base = altura * 2 - 1; // Aqui obtengo la base que necesito para el arbol
  // Convertir a asteriscos
  console.log(`Segun la altura intoducida, la base contiene ${base} asteriscos`);
  let asteriscos_base = "";

  for (let i = 0; i < base; i++) {
    if (!asteriscos_base) {
      asteriscos_base = asteriscos_base + "-";
    }
    asteriscos_base = asteriscos_base + "*";
    console.log(asteriscos_base);
  }
  return;
}

console.log(Arbol(4));
