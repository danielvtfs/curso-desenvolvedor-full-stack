function contador(selectObject) {
  let numeroSelecionados = 0;

  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numeroSelecionados++;
    }
  }
  return numeroSelecionados;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  alert(
    'Total de opções selecionadas: ' + contador(document.selectForm.tipoMusica)
  );
});
