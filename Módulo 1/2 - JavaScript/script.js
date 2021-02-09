let h1 = document.querySelector('.meuH1');

// String
let texto = 'Daniel';
console.log(typeof texto);

//Number
let num = 10;
console.log(typeof num);

//Boolean
let verdadeiroOuFalso = 7 > 6;
console.log(typeof verdadeiroOuFalso);

//Array         0      1      2     3
let meuArray = [110, 'daniel', true, 5.5];
console.log(typeof meuArray);

//Object
let meuObjeto = {
  nome: 'Daniel',
  idade: 33,
  programador: true,
};

console.log(typeof meuObjeto.idade);

h1.innerHTML = texto + '</br>';
h1.innerHTML += num + '</br>';
h1.innerHTML += verdadeiroOuFalso + '</br>';
h1.innerHTML += meuArray[1] + '</br>';
