let tempos = [312, 298, 345, 301, 289, 330, 310, 299];
let nomes = ["Atlas", "Optimus", "Nova", "Bolt", "Titan", "Zeusx"];

let menorTempo = tempos[0];
let indiceMenor = 0;

for (let i = 0; i < tempos.length; i++) {
    if (tempos[i] < menorTempo) {
        menorTempo = tempos[i];
        indiceMenor = i;
    }
}

console.log("O robo campeao foi " + nomes[indiceMenor] + "com o menor tempo de " + menorTempo + " segundos!");