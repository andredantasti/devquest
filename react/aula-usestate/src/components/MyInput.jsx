import { useState } from "react";

const MyInput = () => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        name="Nome"
        id="name"
        placeholder="Digite Algo"
        value={text} onChange={(event) => setText(event.target.value)}
      />

      <p>Você digitou: {text}</p>
      
    <button onClick={() => setText("")}>Limpar</button>

    </>
  );
};

export { MyInput };
