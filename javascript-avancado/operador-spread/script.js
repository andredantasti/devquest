
const pessoas = ["Roberto", "Ricardo", "Rafael"]
console.log(...pessoas);

let pessoas1 = ["João", " Severino", " Jose"];
let pessoas2 = ["Jacinto", " Juvenal", " Jonathan"];

console.log(pessoas1 + " " + " " + pessoas2);
console.log(pessoas1.concat(pessoas2));
console.log(...pessoas1, ...pessoas2);

// criando novo array
pessoas1 = [...pessoas1, ...pessoas2];
console.log(pessoas1)

//clonar objeto

let pessoa1 = {nome: "Andre", idade: 38}
let pessoa2 = {nome: "Richard", idade: 70}

let objetoClonado = {...pessoa2}
console.log(objetoClonado);
