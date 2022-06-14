let nomePessoaMaisVelha = prompt("Digite seu nome");
let idadePessoaMaisVelha = prompt("Digite sua idade");

let nomePessoaMaisNova = prompt("Digite seu nome");
let idadePessoaMaisNova = prompt("Digite sua idade");

let diferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova;

alert(
  `A pessoa mais velha se chama ${nomePessoaMaisVelha} e sua idade é ${idadePessoaMaisVelha}\nA pessoa mais nova se chama ${nomePessoaMaisNova} e sua idade é ${idadePessoaMaisNova}\nA diferença de idade entre ${nomePessoaMaisVelha} e ${nomePessoaMaisNova} é de ${diferencaIdade} anos`
);
