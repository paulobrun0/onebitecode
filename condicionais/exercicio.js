let nomePiloto = prompt("Digite seu nome");
let velocidadeNave = 0;
let novaVelocidade = prompt("Que velocidade voce gostaria de acelerar a nave?");
let confirmacaoAcelerandoNave = confirm(
  `Você quer acelerar a nave a ${novaVelocidade}km/s`
);

if (confirmacaoAcelerandoNave) {
  velocidadeNave = novaVelocidade;
}
if (velocidadeNave <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocidadeNave < 40) {
  alert("Você está devagar. podemos aumentar mais");
} else if (velocidadeNave >= 40 && velocidadeNave < 80) {
  alert("Parece uma boa velocidade para manter");
} else if (velocidadeNave >= 80 && velocidadeNave < 100) {
  alert("Velocidade alta. Considere diminuir");
} else if (velocidadeNave >= 100) {
  alert("Velocidade perigosa. Controle automático forçado");
}
alert(
  `O nome do piloto da nave é ${nomePiloto} a velocidade atual da nave é ${novaVelocidade} km/s`
);
