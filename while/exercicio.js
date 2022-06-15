let nomeNave = prompt("Digite o nome da nave");
let dobras = 0;
let entrarEmDobra = prompt("Deseja entrar em dobra?\n1 - Sim\n2 - Não");

while (entrarEmDobra == "Sim") {
  dobras++;
  entrarEmDobra = prompt("Deseja entrar em dobra novamente?\n1 - Sim\n2 - Não");
}

alert(`O nome da nave é: ${nomeNave}\nA quantidade de dobras é: ${dobras}`);
