function desacelerar(velocidade, mostrar) {
  let desaceleracao = 20;

  while (velocidade > 0) {
    mostrar(velocidade);
    velocidade -= desaceleracao;
  }
  console.log("Nave parada. As comportas podem ser abertas");
}

let velocidadeNave = 150;

desacelerar(velocidadeNave, function (velocidade) {
  console.log(`Velocidade Atual: ${velocidade}`);
});
