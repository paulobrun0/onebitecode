let nomeNave = prompt("Digite o nome da nave");

let velocidadeInicial = 0;
let aceleracao = 5;

function menu(opcao) {
  while (opcao === "1" || opcao === "2" || opcao === "3" || opcao !== "4") {
    opcao = prompt(
      "Escolha uma das opções abaixo\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar a navem em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa"
    );

    if (opcao === "1") {
      velocidadeInicial = acelerar(velocidadeInicial);
    } else if (opcao === "2") {
      velocidadeInicial = desacelerar(velocidadeInicial);
    } else if (opcao === "3") {
      imprimirDados(nomeNave, velocidadeInicial);
    }
  }
}

menu();

function acelerar(velocidade) {
  let novaVelocidade = velocidade + aceleracao;
  return novaVelocidade;
}

function desacelerar(velocidade) {
  let novaVelocidade = velocidade - aceleracao;
  if (novaVelocidade <= 0) {
    novaVelocidade = 0;
  }
  return novaVelocidade;
}

function imprimirDados(nomeNave, velocidade) {
  alert(
    `O nome da nave é: ${nomeNave}\nVelocidade atual é de: ${velocidade}km/s`
  );
}
