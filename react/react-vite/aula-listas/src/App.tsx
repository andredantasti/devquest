import { type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react'

import './App.css'


function App() {
  

  const handleClick = (name: string) => {
    alert(`${name} Seu Animal tu clicou na parada`)
  }


  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log("A tecla pressionada foi: ", event.key)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Formulário enviado com sucesso!")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
  }

  return (
    <>
      <button onClick={() => handleClick("Andre Alexandre")}>
        Clique Aqui
      </button>

      <input type="text" onKeyDown={handleKeyPress} />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite Algo' onChange={handleChange} />
        <button type="submit">
          Enviar
        </button>
      </form>
    </>
  )
}

export default App
