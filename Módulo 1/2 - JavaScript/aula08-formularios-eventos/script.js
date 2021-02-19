window.addEventListener('load', start);

function start() {
  let input1 = document.querySelector('#input1');
  input1.addEventListener('keyup', capturaTexto);

  let form = document.querySelector('form');
  form.addEventListener('submit', prevenirEnvio);
}

function capturaTexto(event) {
  let texto = event.target.value;
  console.log(texto);
}

function prevenirEnvio(event) {
  event.preventDefault();
}
