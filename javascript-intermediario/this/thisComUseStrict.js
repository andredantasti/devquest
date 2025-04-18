'use strict';


// this.name = "Joaquim";

// function saudar(){
//     console.log("This no contexto da função", this);
//     console.log("Olá, " + this.name);
// }

// saudar();

// let usuario = {

//     name: "Joaquim",
//     saudar: function(){
//         console.log("This.name no contexto do método ", this);
//         console.log("This.nome no contexto do método " + this.name);
//     }
// }

// usuario.saudar();

let comida = {
    nome: "Brocolis",
    temperatura: 0
}

comida.cozinhar = function( temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida);
comida.cozinhar(150);
console.log(comida);