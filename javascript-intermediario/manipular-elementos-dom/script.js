function adicionarComentario() {
    
    let inputComentario = document.getElementsByName("novo-comentario");

    let textoDigitado = inputComentario[0].value;

    console.log(textoDigitado);

    let novoComentario = document.getElementById("novos-comentarios");
    console.log(novoComentario.innerHTML);

   novoComentario.innerHTML += "<p> Novo Comentário: " + textoDigitado + "</p>";

   novoComentario.style.color = "green";
}