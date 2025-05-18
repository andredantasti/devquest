let ordens = [
    {cliente: "Roberto", tipo: "compra", quantidade: 56, ativo: "NFLX34"},
    {cliente: "Ricardo", tipo: "compra", quantidade: 76, ativo: "AAPL34"},
    {cliente: "Rafael", tipo: "venda", quantidade: 21, ativo: "GOGL34"},
    {cliente: "Andre", tipo: "devolucao", quantidade: 31, ativo: "XYZS34"},
    ]

    // let quantidadeDeOrdens = 0;

    // for(let i=0; i < ordens.length; i++){
    //     quantidadeDeOrdens += ordens[i].quantidade;
    // }

    // console.log(quantidadeDeOrdens);

    let quantidadeDeOrdens = ordens.reduce(function(quantidadeDeOrdens, ordem) {
        console.log("ordem", quantidadeDeOrdens, ordem);   
        return quantidadeDeOrdens + ordem.quantidade;
    }, 0);

    console.log(quantidadeDeOrdens);