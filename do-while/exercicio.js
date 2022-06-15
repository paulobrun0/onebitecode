let nomeNave = prompt("Digite o nome da nave");
let novoNomeNave = "";
let i = nomeNave.length - 1;

do {
  if (nomeNave[i] == "e") {
    break;
  }
  novoNomeNave += nomeNave[i];
  i--;
} while (i >= 0);

alert(
  `Nome Original da Nave é: ${nomeNave}\nNovo nome da nave é: ${novoNomeNave}`
);
