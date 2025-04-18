
let tenis = {
    cor: "Azul",
    tamanho: 40,
    marca: "Adidas", 
    preco: 99.99,
    emEstoque: true
};

console.table(tenis.cor);
console.log(tenis["marca"])

tenis.preco = 200.00;
tenis.promocao = false;
console.table(tenis);