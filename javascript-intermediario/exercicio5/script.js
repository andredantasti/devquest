const btnEsquerda = document.querySelector(".btn-seta-esquerda");

const btnDireita = document.querySelector(".btn-seta-direita");

const esconderImagem = document.getElementsByClassName("esconder");

let imagensDeFundo = document.getElementsByTagName("section");

btnEsquerda.addEventListener("click", function () {
  for (let i = 0; i <= 3; i++) {
    if (imagensDeFundo[i].classList.contains("container1")) {
      imagensDeFundo[i].classList.remove("container1");
      imagensDeFundo[i].classList.add("container2");
    } else if (imagensDeFundo[i].classList.contains("container2")) {
      imagensDeFundo[i].classList.remove("container2");
      imagensDeFundo[i].classList.add("container3");
    } else if (imagensDeFundo[i].classList.contains("container3")) {
      imagensDeFundo[i].classList.remove("container3");
      imagensDeFundo[i].classList.add("container4");
    } else if (imagensDeFundo[i].classList.contains("container4")) {
      imagensDeFundo[i].classList.remove("container4");
      imagensDeFundo[i].classList.add("container1");
    }
        
     }
  }
);

btnDireita.addEventListener("click", function () {
  for (let i = 0; i < imagensDeFundo.length; i++) {
    if (imagensDeFundo[i].classList.contains("container1")) {
      imagensDeFundo[i].classList.remove("container1");
      imagensDeFundo[i].classList.add("container4");
    } else if (imagensDeFundo[i].classList.contains("container2")) {
      imagensDeFundo[i].classList.remove("container2");
      imagensDeFundo[i].classList.add("container1");
    } else if (imagensDeFundo[i].classList.contains("container3")) {
      imagensDeFundo[i].classList.remove("container3");
      imagensDeFundo[i].classList.add("container2");
    } else if (imagensDeFundo[i].classList.contains("container4")) {
      imagensDeFundo[i].classList.remove("container4");
      imagensDeFundo[i].classList.add("container3");
    }
  }
});

