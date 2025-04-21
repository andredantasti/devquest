
function mostrarAlerta() {
    alert("Alerta!");
}

let selectDeEstado = document.querySelector("select[name='estados']").addEventListener("change", function() {
    console.log(this.value);
})

document.querySelector("select[name='estados']").addEventListener("change", function(event) {
    console.log(event.target.value);
})