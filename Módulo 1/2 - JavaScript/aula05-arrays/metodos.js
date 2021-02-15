// Criando um array e mostrando os índices
//              0         1        2         3          4
let frutas = ['maçã', 'banana', 'melão', 'abacaxi', 'goiaba'];

//tamanho do array
//console.log(frutas.length);

//Acessar um item do Array pelo index
let primeiro = frutas[0];
let ultimo = frutas[frutas.length - 1];

//console.log(primeiro, ultimo);

//Iterar um Array
frutas.forEach((item, index) => {
  console.log(index, item);
});

//Adicionar um item ao final do Array
let addFinal = frutas.push('laranja');
//console.log(addFinal, frutas);

//Adicionar ao início do Array
let addInicio = frutas.unshift('morango');
//console.log(addInicio, frutas);

//Remover um item do final do Array
let removerFruta = frutas.pop();
//console.log(removerFruta, frutas);

//Remover do início do Array
let removePrimeiro = frutas.shift();
//console.log(removePrimeiro, frutas);

//Procurar o índice de um item no Array
let indice = frutas.indexOf('melão');
//console.log(indice);

//Remover um item pela posição do índice
// console.log(frutas);
// let removerItem = frutas.splice(-1, 1);s
// console.log(removerItem, frutas);

//Copiar um Array com slice()
let frutasCopia = frutas.slice(2, 4);
console.log('frutas: ' + frutas);
console.log('frutasCopia: ' + frutasCopia);

//Copiar um Array com spread operator
let copiaSpread = [...frutas, 'jaca'];
console.log(frutas);
console.log(copiaSpread);
