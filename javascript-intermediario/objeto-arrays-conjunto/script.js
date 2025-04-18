let jogo1 = {
    nome: "The Last of Us"
}

let jogo2 = {
    nome: "Red Dead Redemption"
}

let jogo3 = {
    nome: "The Witcher 3"
}

let videoGame = {
    nome: "Xbox",
    valor: 3000,
    jogos: [jogo1, jogo2, jogo3]
}

console.log(videoGame);

videoGame.jogos.push({ //adicionando um novo jogo
    nome: "Fifa 21"
})

console.log(videoGame);

let cliente = {
    nome: "Joaquim",
    ultimoPedido: {
        produto: "Xbox",
        valor: 3000,
        jogos: [{nome: "The Last of Us"}, {nome: "Red Dead Redemption"}, {nome: "The Witcher 3"}]
    }
}

console.log(cliente);