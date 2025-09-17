// const hotel = () => {
 
//     const mensagemInicial = confirm(
//     "Bem-Vindo Aventureiro(a)! Gostaria de pagar R$ 50,00, para passar a noite na nossa hospedagem?"
//   );

//     mensagemInicial == true ? alert("Ótimo! Nós temos as melhores camas de toda a região!") : alert("Que pena! Você parecia ser uma pessoal mais legal!");  
    
  
//   return mensagemInicial;
// };

// hotel();


//EXERCÍCIO 4

const contador = () => {
    const numeros = [0, 1 , 2 , 3, 4 , 5, 6, 7, 8, 10]
    numeros.forEach(element => {
        console.log(`O dobro do número ${element} é ${element *2}`)
    });

}

contador();