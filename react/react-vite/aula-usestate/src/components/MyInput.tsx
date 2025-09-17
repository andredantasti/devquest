import { useState } from "react";

const MyInput = () => {
    
    const [text, setText] = useState("")
    
    return(
    <>
    <br /><br />
    <input type="text" placeholder="Digite Algo..." value={text} onChange={(event) => setText(event.target.value)}/>;
    <p>Você Digitou: {text}</p>
    <button onClick={() => setText("")}>Limpar</button>
    </>

)}

export {MyInput}