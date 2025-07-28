import { useEffect, useState } from "react";


const ButtonBackground = ({ children }) => {
    
    const [mudar, setMudarCor] = useState("");

    useEffect(() => {
        document.body.style.backgroundColor = mudar;
    },[mudar])

    const mudarCor = () => {
        const cores = ["lightblue", "lightgreen", "lightpink", "lightgray", "lavander"];

        const corAleatoria = cores[Math.floor(Math.random()*cores.length)];
        
        setMudarCor(corAleatoria);
        console.log(corAleatoria);
    }

    return (
    <>
      <button onClick={mudarCor}>{children}</button>
    </>
  );
};

export { ButtonBackground };
