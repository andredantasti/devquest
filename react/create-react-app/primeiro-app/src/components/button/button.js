import './button.css';
import React from 'react';

const sayHello = () => {
  console.log("Hello World")
}

const Button = (props) => {
    return <button className="botao" onClick={sayHello}>{props.label}</button>
  }

Button.defaultProps = {
  label: "Clica"
}

export default Button