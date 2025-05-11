
// let setas = document.getElementsByClassName("seta");
// console.log(setas);



// let paragrafos = document.getElementsByTagName("p");

// console.log(paragrafos);


// for(let i=0; i<setas.length;i++){
//     function botao(){
//         addEventListener("click", function(){
//             const item = setas.parentElement;

//             console.log(item);

//             const allItems = document.querySelectorAll(".acordeon");

//             console.log(allItems);

//             allItems.forEach(i => i.classList.remove(".acordeon-active"));

//             item.classList.add(".acordeon-active");
//         })
//     }
// }

const perguntas = document.querySelectorAll("main h2");
console.log(perguntas);


perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const paragrafo = pergunta.nextElementSibling;
    const seta = pergunta.querySelector(".seta");

    // Fecha todos os outros parágrafos
    document.querySelectorAll(".acordeon").forEach((p) => {
      if (p !== paragrafo) {
        p.style.display = "none";
      }
    });

    // Reseta todas as setas
    document.querySelectorAll(".seta").forEach((img) => {
      if (img !== seta) {
        img.style.transform = "rotate(0deg)";
      }
    });

    // Alterna visibilidade do parágrafo atual
    if (paragrafo.style.display === "block") {
      paragrafo.style.display = "none";
      seta.style.transform = "rotate(0deg)";
    } else {
      paragrafo.style.display = "block";
      seta.style.transform = "rotate(180deg)";
    }
  });
});