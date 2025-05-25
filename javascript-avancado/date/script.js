const dataAtual = new Date();
console.log(dataAtual);

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
console.log(`${dia}/${mes}/${ano}`)

dataAtual.setDate(dataAtual.getDate() + 15);
console.log(dataAtual);

const dataNascimento = new Date("1986-08-27");
const dataAtual2 = new Date();

const diferencaEmMilissegundos = dataAtual2 - dataNascimento;
console.log(diferencaEmMilissegundos);

const idade = Math.floor(diferencaEmMilissegundos / (365.25*24*60*60*1000));
console.log(idade);

const dataFormatada = dataAtual.toLocaleDateString("pt-BR");
console.log(dataFormatada);

const formato = new Intl.DateTimeFormat("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric"});
const dataFormatada2 = formato.format(dataAtual);

console.log(dataFormatada2);