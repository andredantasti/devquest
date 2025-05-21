
// new Promise((resolve, reject) => {
//     return new Promise((resolve, reject) => {
        
//     })
// }) 

// Pendente
// Realizada Resolve
// Recusada Reject
// Estabelicida

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;



let ferverAgua = () => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver água");
            resolve();
           
        }else{
            console.log("É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água.");
            reject();
        }
    })
}

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log("Fazendo café")