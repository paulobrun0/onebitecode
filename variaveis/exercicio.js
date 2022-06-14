alert("Bem-Vindo! A seguir pediremos que informe alguns dados.");

let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let confirmaIdade = confirm(`Sua idade é ${idade} anos ?`);

alert(
  `Seu nome é ${nome}, vc tem ${idade} anos e voce confirmou sua idade ${confirmaIdade}`
);
