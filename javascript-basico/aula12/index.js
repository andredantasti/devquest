function calcularFatorial(numero){
    let resultado = i;

    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado;
}

function imprimirFatorial(numero){
    const fatorial = calcularFatorial(numero);
    console.log('O fatorial é ' + numero);
}

const numero = 5;
imprimirFatorial(numero);