
// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 2;
//     let anoDeNascimento = 2025 - idade;
//     if(mesDeNascimento > mesAtual) anoDeNascimento--;
//     imprimir(anoDeNascimento);
// }

// let imprimirAnoDeNascimento = anoDeNascimento =>{
//     console.log("Seu ano de nascimento é: " + anoDeNascimento);
// }
// calcularAnoDeNascimento(38, 8, imprimirAnoDeNascimento);

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador;
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quatrovezes = multiplicar(4);


console.log(quatrovezes(10));