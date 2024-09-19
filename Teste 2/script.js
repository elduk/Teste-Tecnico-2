/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

// Definindo a string
let frase = "Sua tarefa não é curar pessoas tóxicas. Sua tarefa é curar em você o que te conecta a elas.";

// Contando o número de ocorrências da letra 'a'
let count = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === 'a') {
    count++;
  }
}

// Verificando se a letra 'a' existe e exibindo a contagem
if (count > 0) {
  console.log(`A letra 'a' aparece ${count} vezes na string.`);
} else {
  console.log("A letra 'a' não foi encontrada na string.");
}
