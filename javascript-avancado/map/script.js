let pessoas = [{nome: "João", Idade: 33},
               {nome: " Roberto", Idade: 33},
               {nome: " Rafael", Idade: 27}
];

// let nomeDasPessoas = [];
// let idadeDasPessoas = [];
// for(let i=0; i<pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome);
//     idadeDasPessoas.push(pessoas[i].Idade);
// }
// console.log(nomeDasPessoas);
// console.log(idadeDasPessoas);

let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + " tem " + pessoa.Idade + " anos de idade";
})

let pessoasCom27Anos = pessoas.map(function(pessoa){
    return pessoa.Idade = 27;
})

console.log(nomeDasPessoas + " um deles tem a idade de " + pessoasCom27Anos);


let numeros = [1, 2, 4, 6, 8, 9, 10, 12, 13, 14, 15, 30, 60, 120, 240, 480, 960];
console.log(numeros);


let menoresValores = numeros.filter(function(value){
    return value <= 50;
    
})
console.log(menoresValores);

let conjuntoDeIds = [
                    {id: 15},
                    {id: -1},
                    {id: 0},
                    {id: 3},
                    {id: 12.2},
                    {},
                    {id: null},
                    {id: NaN},
                    {id: "undefined"}];

console.log(conjuntoDeIds);

var invalidEntries = 0;

function filterByID(obj){
    if("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)){
        return true;
    }else{
        invalidEntries++;
        return false;
    }
}

var resultadoByID = conjuntoDeIds.filter(filterByID);
console.log(resultadoByID);



console.log("Número de entradas inválidas = " + invalidEntries);




