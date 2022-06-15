// let velocidade = 50;
// let aceleracao = 5;

// do {
//   console.log(`Acelerando: Estamos a ${velocidade} km/s`);
//   velocidade += aceleracao;
// } while (velocidade <= 100);

let nomeNave = "Supernova";

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == "o") {
    break;
  }
  console.log(nomeNave[i]);
}
