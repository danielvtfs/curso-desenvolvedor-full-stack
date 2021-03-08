//factory function
function criaCarro(marca, modelo) {
  return {
    marca,
    modelo,
    ligado: false,

    get ligar() {
      this.ligado = true;
      return `o carro ${this.marca} ${this.modelo} está ligado`;
    },
    get desligar() {
      this.ligado = true;
      return `o carro ${this.marca} ${this.modelo} está desligado`;
    },
  };
}

const carro1 = criaCarro('Chevrolet', 'Onox Plus');
console.log(carro1.ligar);

//constructor function
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.ligado = false;

  this.ligar = function () {
    this.ligado = true;
    return `o carro ${this.marca} ${this.modelo} está ligado`;
  };
}

//{}
const carro2 = new Carro('Fiat', 'Palio');
const carro3 = new Carro('Jeep', 'Renegade');

console.log(carro2);
console.log(carro3.ligar());
