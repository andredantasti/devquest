
function incentivarQuester(mensagem, ...nomesQuesters){
    console.log(`${mensagem} ${nomesQuesters}`);
}

incentivarQuester("Parabens Animal por ter chegado ao modulo avançado do JS,", "André Alexandre", " Raquel", " bob");

//uma mensagem para cada quester usando map

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabens Animal por ter chegado ao modulo avançado do JS,", "André Alexandre", " Raquel", " bob");
