const calcularValorPedido = require("./calcular-valor pedido");

it("não deve cobrar valor de frete quando valor dos produtos for superior a 500", () =>{
        //AAA - 3 passos de criação de um teste
        const meuPedido = {
        // ARRANGE - ARRUMAR OBJETOS 
        itens: [
            {nome: 'Poção de vida', valor: 2000},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };
    //ACT - O QUE QUER REALMENTE TESTAR - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);
    //ASSERT - ASSERÇÃO QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000);
});



it("deve cobrar valor de frete quando valor dos produtos for inferior a 500", () =>{
        //AAA - 3 passos de criação de um teste
        const meuPedido = {
        // ARRANGE - ARRUMAR OBJETOS 
        itens: [
            {nome: 'Giraffas', valor: 150},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    };
    //ACT - O QUE QUER REALMENTE TESTAR - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);
    //ASSERT - ASSERÇÃO QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(200);
});



it("deve cobrar valor de frete se o valor dos produtos seja EXATAMENTE = 500", () =>{
        //AAA - 3 passos de criação de um teste
        const meuPedido = {
        // ARRANGE - ARRUMAR OBJETOS 
        itens: [
            {nome: 'Sanduba', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };
    //ACT - O QUE QUER REALMENTE TESTAR - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);
    //ASSERT - ASSERÇÃO QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(600);
});

it("deve adicionar um acrescimo de 30% no valor da entrega do pedido se o estado for RS", () =>{
// ARRANGE - ARRUMAR OBJETOS
    const pedidoComEstadoRS = {
        estado: "RS",
            itens: [
            {nome: 'Sanduba', valor: 200},
            {nome: 'Entrega', valor: 100, entrega: true}
            ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(330);
})

it("deve adicionar um acrescimo de 30% no valor da entrega do pedido se o estado for SC", () =>{
// ARRANGE - ARRUMAR OBJETOS
    const pedidoComEstadoSC = {
        estado: "SC",
            itens: [
            {nome: 'Sanduba pesado', valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
            ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(530);
})