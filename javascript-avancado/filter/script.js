
let pessoas = [{nome: "Roberto", idade: 33},
               {nome: "Ricardo", idade: 33},
               {nome: "Raphael", idade: 27}
] 

console.log(pessoas);

// let pessoasComMaisDe33Anos = [];
// let pessoasComOutraIdade = [];
// for(let i=0 ; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasComMaisDe33Anos.push(pessoas[i]);
//         console.log(pessoasComMaisDe33Anos);
//     }else {
//         pessoasComOutraIdade.push(pessoas[i]);
//         console.log(pessoasComOutraIdade);
//     }
// }

let pessoasComMaisDe33Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 27;
})

console.log(pessoasComMaisDe33Anos);
