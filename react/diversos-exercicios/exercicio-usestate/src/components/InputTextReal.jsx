import { useState } from "react";

const InputTextReal = ({children}) => {
  const [textReal, setTextReal] = useState("");
    
  return (
    <>
      {children}{" "}
      <input
        type="text"
        value={textReal}
        onChange={(event) => setTextReal(event.target.value)}
      ></input>
        
        <p>{textReal}</p>
    </>
  );
};

export { InputTextReal };
