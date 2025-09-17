import type React from "react"
import "./card.css";

type CardProps = {
    children?: React.ReactNode;
}

const Card = ({children}: CardProps) => {
    return(
        <>
            <div className="card">{children ? children : "Sem conteúdo"}</div>
        </>
    )
}

export {Card}