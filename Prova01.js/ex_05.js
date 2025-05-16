let valores = [1, 4, 20, 3, 9, 17];
let i = 0;
let maior = valores[0];

while (i < valores.length) {
    if (valores[i] > maior) {
        maior = valores[i];
    }
    i++;
}

console.log(maior);