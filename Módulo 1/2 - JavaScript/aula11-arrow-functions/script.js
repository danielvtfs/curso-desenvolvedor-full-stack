const elementos = ['hidrogênio', 'hélio', 'mercúrio', 'ouro'];

const funcRegular = elementos.map(function (elemento) {
  return elemento.length;
});
console.log(`funcRegular: ${funcRegular}`);

// prettier-ignore
const arrowFunction = elementos.map(elemento => {
  return elemento.length;
});
console.log(`arrowFunction: ${arrowFunction}`);

// prettier-ignore
const funcSemReturn = elementos.map(elemento => elemento.length)
console.log(`funcSemReturn: ${funcSemReturn}`);

function soma1(a, b) {
  return a + b;
}
console.log(soma1(4, 3));

const soma2 = function (a, b) {
  return a + b;
};
console.log(soma2(4, 3));

const soma3 = (a, b) => {
  return a + b;
};
console.log(soma3(4, 3));

const soma4 = (a, b) => a + b;
console.log(soma4(4, 3));
