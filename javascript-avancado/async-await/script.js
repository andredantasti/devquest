let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver água!");
            resolve(true);
        } else{
            console.log("É necessário colocar a chaleira no fogo e ligar o fogão!")
            reject(false)
        }
    })

}

let passarOCafe = () => console.log("Passando o café!");
let tomarCafe = () => console.log("Tomando café!") ;
let lavaXicara = () => console.log("Lavando xicara!");


async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavaXicara(cafeTomado);
    if(xicaraLavada) console.log("Finalizado o ritual de tomar cafe!")
}

iniciarProcessoDeFazerCafe();