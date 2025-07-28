import { useState } from "react"

const InputEnter = () => {

        const [mensagem, setMensagem] = useState("");
        

        const handleyKeyDown = (event) => {
            if(event.key === "Enter"){
                alert(`${mensagem}`);
            }
        };
    return(
        <>
            <input placeholder="Digite e aperte enter" type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} onKeyDown={handleyKeyDown}></input>
        </>
    )
}

export {InputEnter}