import { UserCard } from "./UserCard"



const ProductItem = ({produto}) => {
    return(
        <>
        <p>Nome: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <p>Categoria: {produto.categoria}</p>
        
        </>
        
    )

}

export {ProductItem}