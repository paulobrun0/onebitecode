let velocidade = 80;

switch (velocidade * 2) {
  case 100:
    console.log("Sua velcidade é 100km/s");
    break;
  case 160:
    console.log("Sua velocidade é 160km/s");
    break;
  default:
    console.log("Velocidade não identificada");
    break;
}

let nave = "Elemental";

switch (nave) {
  case "Golias":
    console.log("Nave mais resistente");
    break;
  case "Raptor":
    console.log("Nave mais rápida");
    break;
  case "Enterprise":
    console.log("Nave da Frota Estelar");
    break;
  default:
    console.log("Nave comum");
    break;
}
