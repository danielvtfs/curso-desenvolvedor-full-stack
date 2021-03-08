/* function criaPessoa(nome, idade) {
  const obj = {};
  obj.nome = nome;
  obj.idade = idade;
  obj.saudacao = function () {
    console.log(`oi, eu sou o ${obj.nome}.`);
  };
  return obj;
}

const pessoa1 = criaPessoa('Daniel', 33);
const pessoa2 = criaPessoa('Thiago');

console.log(pessoa2.nome);
console.log(pessoa2.idade); */

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.saudacao = function () {
    return `oi, eu sou o ${this.nome}.`;
  };
}

const pessoa1 = new Pessoa('Daniel', 'Fernandez', 33);
const pessoa2 = new Pessoa('Thiago', 'Silva', 33);

console.log(pessoa1['sobrenome']);
console.log(pessoa2.saudacao());
