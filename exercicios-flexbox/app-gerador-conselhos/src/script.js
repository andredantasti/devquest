const btnConselho = document.getElementById("botao");
console.log(btnConselho);

let idConselho = document.getElementById("num-conselho");
console.log(idConselho);

let conselho = document.getElementById("descricao-conselho");
console.log(conselho);

btnConselho.addEventListener("click", function () {
 pegarConselhoEId();
});

async function pegarConselhoEId() {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        console.log(response);
        
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const IdEConselho = await response.json();
        console.log(IdEConselho);
        const {id, advice} = IdEConselho.slip;

        idConselho.innerText = `Advice #${id}`;
        conselho.innerText = advice;

    } catch (error) {
        console.error(`Não foi possível obter o ID e nem o conselho: ${error}`);
    }
}


