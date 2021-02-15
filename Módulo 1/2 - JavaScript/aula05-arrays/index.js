//índices        0   1   2   3
const numeros = [10, 20, 30, 40];
//console.log(typeof numeros);

//Não é boa prática
// prettier-ignore
//                        0  1      2      3                    4              5
const conjuntoDeCoisas = [1, 2, 'daniel', true, { nome: 'Thiago', idade: 30}, NaN];
console.log(conjuntoDeCoisas);

//testando um NaN
let n = 5 / '2';
console.log(n);

conjuntoDeCoisas[4] = 'teste';
console.log(conjuntoDeCoisas);
