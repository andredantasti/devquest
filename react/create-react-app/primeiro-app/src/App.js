import Button from "./components/button/button.js";
import "./App.css";
import Card from "./components/card/card.js";

function App() {
  return (
    <div className="App">
      <p>
        <Button title="Home"/>
      </p>
      <p>
        <Button title="Anuncios"/>
      </p>
      <p>
        <Button title="Festas e Eventos"/>
      </p>
      <p>
        <Button title="Boates"/>
      </p>
      <p>
        <Button title="Bares"/>
      </p>
      <div className="containerCard">
      <Card title="Titulo Card 1"/><Card title="TItulo Card 2"/> <Card title="Titulo Card 3"/> <Card title="Titulo Card 4" /> <Card title="TItulo Card 5"/>
      </div>
    </div>
  );
}

export default App;
