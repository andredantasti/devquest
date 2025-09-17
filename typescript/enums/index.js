var Direcao;
(function (Direcao) {
    Direcao[Direcao["Cima"] = 0] = "Cima";
    Direcao[Direcao["Baixo"] = 1] = "Baixo";
    Direcao[Direcao["Esquerda"] = 2] = "Esquerda";
    Direcao[Direcao["Direita"] = 3] = "Direita";
})(Direcao || (Direcao = {}));
function showDirecao(direcoes) {
    console.log(direcoes);
}
showDirecao(Direcao.Direita);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
function showColors(color) {
    console.log(color);
}
showColors(Colors.Red);
for (var key in Colors) {
    console.log(key);
}
