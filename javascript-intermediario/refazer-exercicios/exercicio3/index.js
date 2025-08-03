const quadradoTest = document.getElementById("quad");

console.log(quadradoTest)


const verificarClasse = () => {

    quadradoTest.addEventListener("click", ()=>{
        console.log(quadradoTest.classList.contains("quadradoAzul"));
        if(!quadradoTest.classList.contains("quadradoAzul")){
            quadradoTest.classList.add("quadradoAzul");
        } else{
            quadradoTest.classList.remove("quadradoAzul")
        }
    })
} 

verificarClasse();