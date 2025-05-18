
let pessoa = {nome: "André Alexandre", sobrenome: "Dantas", idade: 38}
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;

console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
//console.log(idade);

//desestruturação

let {nome: nome, idade: idade, sobrenome: sobrenome} = pessoa;
console.log(nome)
console.log(idade)
console.log(sobrenome)

const numeros = [1, 2, 3];

const [ um, dois, cinco] = numeros;

console.log(dois)
console.log(um, dois, cinco)