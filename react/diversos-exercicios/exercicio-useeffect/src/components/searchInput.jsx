import { useEffect, useState } from "react"


const SearchInput = () => {

    const [textDigitado, setTextDigitado] = useState("");

    useEffect(() => {
            console.log("Texto digitado:", textDigitado)
    }, [textDigitado])

    return(
        <>
            Buscar por: <input type="text" placeholder="Digite algo" value={textDigitado} onChange={(event) => setTextDigitado(event.target.value)}></input>
            
            
        </>
    )
    
}

export {SearchInput}