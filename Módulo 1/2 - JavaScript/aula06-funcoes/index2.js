//variáveis definidas no escopo global
let n1 = 10;
let n2 = 2;

function multiplica() {
  return n1 * n2;
}

console.log(multiplica());

if (true) {
  var x = 5;
}

if (true) {
  let y = 4;
}

//console.log(y);

var nome = 'marcos';

var nome = 'daniel';

console.log(nome);

function addQuadrado(a, b) {
  function quadrado(x) {
    return x * x;
  }
  return quadrado(a) + quadrado(b);
}

let a = addQuadrado(2, 3);
let b = addQuadrado(3, 4);
let c = addQuadrado(4, 5);

console.log(a, b, c);
