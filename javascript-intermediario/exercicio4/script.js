
const inputPreenchido = document.getElementsByClassName("input");

console.log(inputPreenchido);

for (let i = 0; i < inputPreenchido.length; i++) {
    inputPreenchido[i].addEventListener("change", function() {
        if (this.value != "") {
            this.style.border = "2px solid green";
        } else {
            this.style.border = "1px solid black";
        }
    })
}
