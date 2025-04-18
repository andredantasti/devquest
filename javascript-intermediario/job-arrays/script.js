let frutas = ["banana", "maca", "abacaxi", "laranja"];
let frutasTamanho = frutas.length;
for (let i = 0; i < frutasTamanho; i++) {
    console.log("Fruta: " + frutas[i]);
}

frutas.forEach(function(item){
    console.log("Fruta: " + item);
});

//metodos

console.log(frutas);

frutas.push("uva", "abacate");//add elemento ao final do array
console.log(frutas);

frutas.pop(); // tira o último elemento do array
console.log(frutas);

frutas.shift(); //tira o primeiro elemento do array
console.log(frutas);

frutas.unshift("abacaxi"); //adiciona um elemento no inicio do array
console.log(frutas);

let posicaoFrutas = frutas.indexOf("laranja"); //retorna o indice do elemento no array   
console.log(posicaoFrutas);