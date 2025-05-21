
function colocarAguaPraFerver(){
    console.log("Colocar água pra ferver");
    
    setTimeout(() => {
        console.log("agua ferveu!")
        passarOCafe();
    }, 10000);
}

function prepararPraPassarOCafe(){
    console.log("pegar o pó do café");
    console.log("pegar o filtro do café");
    console.log("colocar o café no filtro");
    console.log("colocar o filtro em cima da xícara");
}

function passarOCafe(){
    console.log("passando o café");
}

colocarAguaPraFerver();
prepararPraPassarOCafe();
