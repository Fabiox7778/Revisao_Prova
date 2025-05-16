let pedido = 3;
let nomedoCombo = "";
let preço = 0;

switch (pedido) {
    case 1:
        nomedoCombo = "Batata + Suco";
        preço = 12;
        break;
    case 2:
        nomedoCombo = "Hamburguer";
        preço = 15;
        break;
    case 3:
        nomedoCombo = "Pizza Broto";
        preço = 20;
        break;
    default:
        console.log("Opcao invalida")
        break
}

if (nomedoCombo != "") {
    console.log("Combo escolhido", nomedoCombo);
    console.log("Preço: R$", preço);
}