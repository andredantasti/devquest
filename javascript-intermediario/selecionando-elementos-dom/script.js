// console.log(document);

// let p = document.getElementById("paragrafo1");

// console.log(p);

// console.log(p.textContent);
// console.log(document.body);

let inputPorClasse = document.getElementsByClassName("tag-de-input");
console.log(inputPorClasse);

let inputPorTag = document.getElementsByTagName("input");
console.log(inputPorTag);

let inputPorNome = document.getElementsByName("email");
console.log(inputPorNome);

let inputPorName2 = document.querySelector(".tag-de-input");
console.log(inputPorName2);

let inputPorName3 = document.querySelectorAll("input[name='email']");
console.log(inputPorName3);