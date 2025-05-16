let caixas = [3, 7, 5, 2, 8];
let totalAnimais = 0;

for (let i = 0; i < caixas.length; i++) {
    totalAnimais += caixas[i];
}
console.log(`O total de animais é ${totalAnimais}`);

if (totalAnimais > 20) { 
    console.log("Estoque cheio")
} else {
    console.log("Ainda cabe mais!!!")
}