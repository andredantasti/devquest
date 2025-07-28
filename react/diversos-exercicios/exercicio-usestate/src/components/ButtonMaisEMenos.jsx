import { useState } from "react"


const ButtonMaisEMenos = () =>{
    const [count, setCount] = useState(0);
    

    return(
        <>
        <button onClick={()=>setCount((count)=> count + 1)}>+</button>
        {count}
        <button onClick={()=>setCount((count)=> count - 1)}>-</button>
        </>
    )

}

export {ButtonMaisEMenos}