
const numeros = [65, 44, 12, 4];

console.log("Array original: " + numeros);

numeros.forEach((valor, indice, arr) => { arr[indice] = valor * 10
});

console.log("Array multiplicado por 10: " + numeros);