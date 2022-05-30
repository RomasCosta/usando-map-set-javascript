const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  //... os três pontos indicam o comando spread que permitir criar um array usando os elementos do Set. Retira do set e coloca no array.
  return [...mySet];
}

console.log(valoresUnicos(meuArray));