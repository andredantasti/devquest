
let frutas = ["banana", "maca", "abacaxi", "laranja"];

let frutasExtraidas = frutas.slice(1, 4);
console.log(frutasExtraidas);

let frutasExtraidas2 = frutas.splice(0, 2);
console.log(frutasExtraidas2);
console.log(frutas);

let removeEAdicionaFrutas = frutas.splice(1, 2, "uva", "abacate");
console.log(removeEAdicionaFrutas);
console.log(frutas);    