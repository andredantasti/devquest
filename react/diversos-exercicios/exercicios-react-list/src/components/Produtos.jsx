

const ComputadorFone = ({produto}) => {
    console.log({produto})
    return(
        <>
        <ul>
         {produto.map((produto) => (
                <li style={{display:"flex", justifyContent:"space-around", textAlign:"left", padding:"0.5rem"}} key={produto.id}>{produto.nome} <span>R${produto.preco}</span> Categoria: {produto.categoria} 
                </li>
         ) )}   
        </ul>
        </>
    )
}

export {ComputadorFone}