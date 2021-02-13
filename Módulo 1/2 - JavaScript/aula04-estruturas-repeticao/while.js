let cont = 11;
let soma = 0;

//operadores de igualdade: >, <, >=, <=

// while (cont <= 10) {
//   console.log('cont atual é: ' + cont);
//   soma += cont;
//   console.log('soma atual é: ' + soma);

//   cont++;
// }

do {
  console.log('cont atual é: ' + cont);
  soma += cont;
  console.log('soma atual é: ' + soma);

  cont++;
} while (cont <= 10);

console.log('final');
