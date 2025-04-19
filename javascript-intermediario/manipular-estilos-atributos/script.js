function alterarCorDeFundoPrimeiroPost() {
    let post = document.getElementsByClassName("post");
    console.log(post);
    let primeiroPost = post[0];
    console.log(primeiroPost);
    primeiroPost.style.backgroundColor = "yellow";
}


function aumentarFonteSegundoPost() {
    let textoPost = document.getElementsByClassName("texto-post");
    textoPost[1].classList.add("fonte-grande");
}   

function marcaRadio(sexo) {
    let radioMasculino = document.getElementById("genero-masculino");
    let radioFeminino = document.getElementById("genero-feminino");
    if (sexo === "M") {
        radioMasculino.checked = true;
    } else {
        radioFeminino.checked = true;
    }
}