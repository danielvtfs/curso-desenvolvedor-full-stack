function soma(a, b) {
  let resultado = a + b;
  return resultado;
}

//console.log(soma(2, 5));

function comparaNumeros(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(comparaNumeros(3, 1));
console.log(comparaNumeros(3, 3));
console.log(comparaNumeros(3, 5));

function trocaCarro(objeto) {
  objeto.modelo = 'Tracker';
}

const meuCarro = {
  marca: 'Chevrolet',
  modelo: 'Onix Plus',
  ano: 2020,
};

let x, y;

x = meuCarro.marca;

//trocaCarro(meuCarro);

y = meuCarro.modelo;

console.log(x, y);

let quadrado = function (numero) {
  return numero * numero;
};

console.log(quadrado(10));
