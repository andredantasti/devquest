const trocarDeCor = () => {
  const btn = document.getElementById("botao");
  const quadrado1 = document.getElementById("quadrado1");
  const quadrado2 = document.getElementById("quadrado2");

  let alterado = false;

  btn.addEventListener("click", () => {
    if (!alterado) {
      quadrado1.style.backgroundColor = "yellow";
      quadrado2.style.backgroundColor = "red";
      alterado = true;
    } else {
      quadrado1.style.backgroundColor = "";
      quadrado2.style.backgroundColor = "";
      alterado = false;
    }
  });
};

trocarDeCor();
