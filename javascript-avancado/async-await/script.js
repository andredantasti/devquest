let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Passo 1: Agua foi Fervida!");
            resolve(true);
        } else{
            console.log("É necessário colocar a chaleira no fogo e ligar o fogão!")
            reject(false)
        }
    })

}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado: Café foi passado");
        resolve(true);
    })  
}
let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("Passo 3 Finalizado: Terminei de tomar o café!");
    resolve(true);
  })  
} 

let lavaXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log("Passo 4 finalizado: Xícara Lavada")
        resolve(true);
    })
    
}

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarOCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavaXicara(cafeTomado);
    if(xicaraLavada) console.log("Finalizado o ritual de tomar cafe!")
}

iniciarProcessoDeFazerCafe();