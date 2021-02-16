function aleatorio(min = 1000, max = 3000) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

function a(callback) {
  setTimeout(function () {
    console.log('a');
    if (callback) callback();
  }, aleatorio());
}

function b(callback) {
  setTimeout(function () {
    console.log('b');
    if (callback) callback();
  }, aleatorio());
}

function c(callback) {
  setTimeout(function () {
    console.log('c');
    if (callback) callback();
  }, aleatorio());
}

a(function () {
  b(function () {
    c(function () {
      console.log('exibir no final');
    });
  });
});
