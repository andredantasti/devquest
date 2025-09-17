import { useState } from 'react'

import './App.css'
import { MyInput } from './components/MyInput'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
   setCount(prev => prev +1 )
   console.log(count)
  }

  const resetCounter = () => {
    setCount(0);
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <p>Contador = {count}</p>
      <button onClick={increment}>Contador</button>
      <button onClick={resetCounter}>Zerar Contador</button>
      <button onClick={decrement}>Contador - 1</button>

      <MyInput></MyInput>
    
    </>
  )
}

export default App
