

async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    console.log(resposta);
    return resposta.json();
}

criarBaralhoEmbaralhado();

async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
    const resposta = await fetch(url);
    return await resposta.json();
    
}

const btnTirarCarta = document.getElementById("btn-tirar");
console.log(btnTirarCarta);

btnTirarCarta.addEventListener("click", function(){
tirarCartaAleatoriaDoBaralho();
})


async function tirarCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado();
    console.log(baralho);
    const carta = await tirarUmaCarta(baralho.deck_id);
    console.log(carta);
    const imagemCarta = carta.cards[0].image;
    document.getElementById("carta1").src = imagemCarta;
    const imagemCarta2 = carta.cards[1].image;
    document.getElementById("carta2").src = imagemCarta2;
}