let distanciaAnosLuz = prompt("Digite a distância em anos-luz");

let escolhaConversao = prompt(
  "Escolha uma das opções abaixo\n1 - Parsec(pc)\n2 - Unidade astronômica(au)\n3 - Quilômetros(km)"
);

let distanciaConvertida = null;

let parsec = 0.306601;
let unidadeAstronomica = 63241.1;
let quilometros = 9.5 * Math.pow(10, 12);

switch (escolhaConversao) {
  case "pc":
    distanciaConvertida = distanciaAnosLuz * parsec;
    break;
  case "au":
    distanciaConvertida = distanciaAnosLuz * unidadeAstronomica;
    break;
  case "km":
    distanciaConvertida = distanciaAnosLuz * quilometros;
    break;

  default:
    alert(
      `Distancia em Anos-luz: ${distanciaAnosLuz}\nUnidade não identificada: Conversão fora do escopo`
    );
    break;
}

alert(
  `Distancia em Anos-luz: ${distanciaAnosLuz}\nConversão desejada: ${escolhaConversao}\nDistância convertida: ${distanciaConvertida}`
);
