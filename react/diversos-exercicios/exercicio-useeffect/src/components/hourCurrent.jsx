import { useState, useEffect } from "react"

const HourCurrent = () => {
    
    const [hora, setHora] = useState("");

    useEffect(() => {

        const updateHour = () => {
        const current = new Date();
        const hour = current.getHours().toString().padStart(2, '0');
        const minutes = current.getMinutes().toString().padStart(2, '0');
        const seconds = current.getSeconds().toString().padStart(2, '0');
        
        setHora(`${hour}:${minutes}:${seconds}`);

    }

    updateHour();

    const intervalo = setInterval(updateHour, 1000);
    return () => clearInterval(intervalo);
    }, [])
    
    return (
        <>
            <h2>Hora Atual:</h2>
            <p>{hora}</p>
        </>
    )

}

export {HourCurrent}