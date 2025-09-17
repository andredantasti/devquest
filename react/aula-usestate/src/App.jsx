import { useState } from 'react'
import './App.css'
import { MyInput } from './components/MyInput';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    
    setCount(prev => prev + 1)

  }

  const resetCounter = () =>{
    setCount(0);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <>
        <button onClick={increment}>Incrementar o valor</button>
        <button onClick={resetCounter}>Resetar Contador</button>
        <button onClick={decrement}>Decrementar Valor</button>
      <p>Contador: {count}</p>
      <MyInput></MyInput>
      
    </>
  )
}

export default App
