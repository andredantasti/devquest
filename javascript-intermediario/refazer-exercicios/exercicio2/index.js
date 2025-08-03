
const numeros = [65, 44, 12, 4];
const resultadoFinal = document.getElementById("result")

console.log(numeros)

const multiplicacaoNumeros = () => {
    let resultados = "";

    numeros.forEach((numeros, index) => {
     const resultado = (numeros * 10);
     console.log(resultado)
     resultados += `<li>Nº ${index} - ${numeros} x 10 = ${resultado}</li>`;
    });
    
    resultadoFinal.innerHTML = resultados;

};

multiplicacaoNumeros();