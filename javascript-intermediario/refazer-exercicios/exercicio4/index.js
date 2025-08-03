
const nameUser = document.getElementById("nome");
console.log(nameUser);

const emailUser = document.getElementById("email");
console.log(emailUser);

const formulario = document.getElementById("form");

const mensagem = document.createElement("p");



const validarInputs = () => {
    nameUser.addEventListener("change", function(){
        
        if(nameUser.value.trim() === ""){
            nameUser.classList.add("invalido");
            
            
        }else{
            nameUser.classList.remove("invalido");
            nameUser.classList.add("valido");
            
       }

    })
}

validarInputs();