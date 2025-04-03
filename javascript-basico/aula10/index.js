//Switch (parametro){
//case valor1:
//<bloco de declaracao>
//case valor2: ....
//}

let nomeFilme = 'BOdy'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos Vingadores!');
        break;
    case 'Fast and Furious':
        console.log('É o filme dos Velozes e Furiosos');
        break;
    case 'Batman':
    console.log('É o filme do Batman vs Superman');
    break;
    default:
        console.log('É outro filme');
        break;
}