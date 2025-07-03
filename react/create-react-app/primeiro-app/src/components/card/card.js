import React from "react";
import "./card.css";

const Card = ({ children, color = 'orange', showCardColor}) => {
  return (
    <div className="card" style={{ backgroundColor: color }} onClick={()=>showCardColor(color)}>
      {children}
    </div>
  );
};

export default Card;
