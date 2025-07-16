import { Component } from "react";
import './panel.css'

class Panel extends Component{

    constructor(){
        super()
        this.state = {
            title: "Titulo do Painel",
            paragrafo: "My egss"
        }
    }

    render(){
        return(
            <section className="panel" onClick={() => this.setState({title: "Titulo Novo do Painel"})}>
                <h2>{this.state.title}</h2>
                <p style={{color:"red"}}>{this.state.paragrafo}</p>
            </section>
        )
    }
}

export default Panel;