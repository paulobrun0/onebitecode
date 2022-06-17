// function nomePiloto(nome) {
//   console.log(`Bom dia, ${nome} `);
// }

// nomePiloto("Paulo");

function aceleraNave(velocidade, acelerando) {
  let novaVelocidade = velocidade + acelerando;
  console.log(`Nova velocidade: ${novaVelocidade}`);
}

aceleraNave(60, 10);

aceleraNave(40, 20);

aceleraNave(70, 5);

// Retorno da função

function acelerar(velocidade, aceleracao) {
  let novaVelocidade = velocidade + aceleracao;
  console.log(`Nova velocidade: ${novaVelocidade}`);
  return novaVelocidade;
}

let velocidade = 80;
let aceleracao = 5;

console.log(velocidade);

velocidade = acelerar(velocidade, aceleracao);

console.log(velocidade);
