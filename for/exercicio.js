let nomeNave = prompt("Digite o nome da nave");
let novoNomeNave = "";
let qualCaractereSubstituir = prompt("Qual caractere você deseja substituir?");
let novoCaractere = prompt("Digite o novo caractere!");

for (i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == qualCaractereSubstituir) {
    novoNomeNave += novoCaractere;
  } else {
    novoNomeNave += nomeNave[i];
  }
}

alert(`O novo nome da nave é: ${novoNomeNave}`);
