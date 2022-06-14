let dataDePartida = prompt("Digite a data de partida (formato DD/MM/YYYY)");

let conversaoDataDePartida = moment(dataDePartida, "DD/MM/YYYY");

let dataAtual = moment();

let diferencaData = dataAtual - conversaoDataDePartida;

let opcaoDeEscolha = prompt(
  "Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2 - Minutos\n3 - Horas\n4 - Dias"
);

if (opcaoDeEscolha == "1") {
  let segundosDePartida = Math.round(diferencaData / 1000);
  alert(`Tempo de voo: ${segundosDePartida} segundos`);
} else if (opcaoDeEscolha == "2") {
  let minutosDePartida = Math.round(diferencaData / 1000 / 60);
  alert(`Tempo de voo ${minutosDePartida} minutos`);
} else if (opcaoDeEscolha == "3") {
  let horasDePartida = Math.round(diferencaData / 1000 / 3600);
  alert(`Tempo de voo ${horasDePartida} horas`);
} else if (opcaoDeEscolha == "4") {
  let diasDePartida = Math.round(diferencaData / 1000 / 3600 / 24);
  alert(`Tempo de voo ${diasDePartida} dias`);
} else {
  alert("Opção invalida!");
}
