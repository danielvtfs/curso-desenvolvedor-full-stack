const pessoas = ['daniel', 'marcos', 'maria', 'joão', 'gabriel'];

console.log(pessoas[1]);
const [primeiro, segundo, ...rest] = pessoas;
console.log(primeiro);
console.log(rest);
