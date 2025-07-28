import styled from "styled-components"


const Header = ({children}) => {

    return(
        <header style={{width:"100%", backgroundColor:"lightcoral", padding: "1rem"}}>
            {children}
        </header>
    )
}

export { Header }