enum Direcao{
    Cima,
    Baixo,
    Esquerda,
    Direita
}

function showDirecao(direcoes){
    console.log(direcoes);
}

showDirecao(Direcao.Direita)

enum Colors {
    Red,
    Blue, 
    Green
}

function showColors(color){
    console.log(color);
}

showColors(Colors.Red)

for(const key in Colors){
    console.log(key);
}