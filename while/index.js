// let velocidade = 50;
// let aceleracao = 5;

// while (velocidade <= 100) {
//   console.log(`Acelerando: Estamos a ${velocidade}`);
//   velocidade += aceleracao; // velocidade = velocidade + acelaracao
// }

let constelacao = "Andromeda";
let posicao = 0;
let tamanhoConstelacao = constelacao.length;

while (posicao < tamanhoConstelacao) {
  if (constelacao[posicao] == "a" || constelacao[posicao] == "A") {
    console.log(posicao);
  }
  posicao += 1;
}
