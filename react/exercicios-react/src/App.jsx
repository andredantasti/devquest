
import './App.css'
import { ProductItem } from './components/ProductItem';
import { UserCard } from './components/UserCard'
import styled from 'styled-components'

const Card = styled.div`
  background-color: lightgreen;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: center;
  margin: 10px;
  border: 1px solid green;
  border-radius: 10px;


  `;




function App() {
        const produto = {
        nome: "Omo Progress",
        preco: "R$ 15,00",
        categoria: "Produtos de Limpeza"
      };

  return (
    <>
      /* <Card>
      <UserCard title="Informações Card "nome="André Alexandre" age="39" email="maju@gmail.com" ></UserCard>
      </Card>

      <Card style={{backgroundColor: "lightblue"}} >
      <ProductItem produto={produto}></ProductItem>
      </Card>
    </>
  )
}

export default App
