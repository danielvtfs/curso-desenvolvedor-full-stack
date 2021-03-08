const pessoa = {
  nomeCompleto: { nome: 'Daniel', sobrenome: 'Fernandez' },
  idade: 33,
  sexo: 'masculino',
  interesses: ['programação', 'música', 'futebol'],
  saudacao: function () {
    alert(
      `olá, eu sou o ${this.nomeCompleto.nome}, gosto de ${this.interesses[0]} `
    );
  },
};

const pessoa1 = {
  nome: 'daniel',
  saudacao: function () {
    alert(`olá, eu sou o ${this.nome} `);
  },
};

const pessoa2 = {
  nome: 'joão',
  saudacao: function () {
    alert(`olá, eu sou o ${this.nome} `);
  },
};
