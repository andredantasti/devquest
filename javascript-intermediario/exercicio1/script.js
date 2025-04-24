
const btnTrocarCor = document.getElementById("btn-trocar-cor");
const quadradoAzul = document.getElementsByClassName("quadrado1");

btnTrocarCor.addEventListener("click", mudarCorDoQuadrado);

function mudarCorDoQuadrado() {
    let quadradoAzul = document.getElementsByClassName("quadrado1");
    console.log(quadradoAzul);
    quadradoAzul[0].style.backgroundColor = "yellow";
}

