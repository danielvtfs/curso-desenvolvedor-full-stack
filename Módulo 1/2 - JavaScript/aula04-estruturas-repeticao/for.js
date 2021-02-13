let soma = 0;

// for (let i = 0; i <= 10; i++) {
//   console.log('cont atual é: ' + i);
//   soma += i;
//   console.log('soma atual é: ' + soma);
// }

// for in           0          1       2
//const pessoas = ['daniel', 'thiago', 'joão'];
//          012345
let nome = 'Daniel';

// const pessoa = {
//   nome: 'Daniel',
//   sobrenome: 'Fernandez',
//   idade: 33,
// };

// for (let prop in pessoa) {
//   console.log(prop + ': ' + pessoa[prop]);
// }

//for of
for (const index of nome) {
  console.log(index);
}
