let nomeNave = "Helmet";
let novoNomeNave = "";

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == "e") {
    novoNomeNave += "i";
  } else {
    novoNomeNave += nomeNave[i];
  }
}

console.log(novoNomeNave);
