const h1 = document.querySelector('.titulo');

let soma = 15 % 2;

let a = 3;
let b = 3;

let testeIgualdade = a === b;

let testeNegacao = !testeIgualdade;
// ++ ou --
let x = 3;
let y = x--;

// h1.innerHTML = soma + '</br>';
// h1.innerHTML += testeIgualdade + '</br>';
// h1.innerHTML += testeNegacao + '</br>';
h1.innerHTML += 'x = ' + x + '</br>';
h1.innerHTML += 'y = ' + y + '</br>';
