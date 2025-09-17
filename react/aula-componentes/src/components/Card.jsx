import "../components/card.css";
import { Tasks } from "./Tasks";

const Card = ({children}) =>{

    return(
        <div className="card">
            <Tasks></Tasks>
            {children}
        </div>
    )

}

export {Card}