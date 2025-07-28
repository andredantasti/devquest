import styled from "styled-components"

// const Titulo = styled.h2`
//         background-color: lightblue;
// `

const Card = ({children, corDeFundo="green"}) =>{
    console.log(children, corDeFundo)
    return(
        <div>
            <h3 style={{backgroundColor: corDeFundo}}>{children}</h3>
        </div>


)


}


export {Card}