
setTimeout(function(){
    alert("alo 3 segundos");
}, 3000);

// setInterval(() => {
//  alert("de novo de novo!")
// }, 5000);

const idDoIntervalo = setInterval(() => {
   console.log("Executando a parada a cada 2 segundos") 
}, 2000);
console.log(idDoIntervalo);
clearInterval(idDoIntervalo);