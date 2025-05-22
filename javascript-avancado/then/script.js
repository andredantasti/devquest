let ferverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogo && fogaoEstaLigado) {
      console.log("Começando o processo de ferver a água!");
      resolve();
    } else {
      console.log(
        "É necessário colocar a chaleira com a água e ligar o fogão se não teu cafezinho não vai ficar pronto nunca"
      );
      reject();
    }
  });
};

let chaleiraEstaNoFogo = true;
let fogaoEstaLigado = true;

let passarCafe = () => console.log("Passando o café!");

ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado).then(passarCafe);
console.log("Fazendo café!");

//exemplo
ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado)
  .then(() => {
    return passarCafe();
  })
  .then(() => {
    return ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado);
  })
  .then(() => {
    return passarCafe();
  }).then(() => {
    return passarCafe();
  }).then(() => {
    console.log("Acabou!!!!!!!!!!")
  });
