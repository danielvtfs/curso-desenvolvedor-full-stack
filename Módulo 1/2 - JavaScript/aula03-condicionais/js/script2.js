const fruta = 'jaca';

switch (fruta) {
  case 'banana':
    console.log('bananas custam $4,00 o kilo');
    break;
  case 'maçã':
    console.log('maçãs custam $9,00 o kilo');
    break;
  case 'cereja':
    console.log('cerejas custam $12,00 o kilo');
    break;
  case 'manga':
    console.log('mangas custam $10,00 o kilo');
    break;
  default:
    console.log('desculpe, não temos ' + fruta + '.');
}
