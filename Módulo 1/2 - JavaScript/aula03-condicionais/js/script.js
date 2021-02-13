const h1 = document.querySelector('.primeiro');
h1.textContent = 'Vazio';
const h2 = document.querySelector('.segundo');
h1.textContent = 'Vazio';
const h3 = document.querySelector('.terceiro');
h1.textContent = 'Vazio';

let sorvete = 'chocolate';

// if, else, else if
if (sorvete === 'chocolate') {
  h1.textContent = 'Feliz';
} else if (sorvete === 'morango') {
  h1.textContent = 'Triste';
} else {
  h1.textContent = 'aguardando sorvete';
}

//Operadores lógicos binários &&->and e ||->or
let meuSalario = 20000;

if (sorvete === 'chocolate' || meuSalario > 30000) {
  h2.textContent = 'Feliz';
} else {
  h2.textContent = 'Triste';
}

//Operador condicional ternário: condição ? seVerdadeiro : seFalso
let cor = sorvete === 'chocolate' ? 'Marrom' : 'Vermelho';

h3.textContent = cor;
