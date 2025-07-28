import "./App.css";
import { ButtonMaisEMenos } from "./components/ButtonMaisEMenos";
import { InputTextReal } from "./components/InputTextReal";
import { ButtonBackground } from "./components/ButtonBackground";
import { InputEnter } from "./components/InputEnter";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <h1>Header - Component</h1>
        <InputTextReal>
          <span>Digite Algo: </span>
        </InputTextReal>
      </Header>

      <Main>
        <h1>Main - Component</h1>
        <ButtonMaisEMenos></ButtonMaisEMenos>
      </Main>

      <Footer>
        <div style={{ margin: "1rem" }}>
          <ButtonBackground>
            <p>Mudar cor de fundo</p>
          </ButtonBackground>
        </div>
        <p>
          Arrocha outro evento: <InputEnter></InputEnter>
        </p>
      </Footer>
    </>
  );
}

export default App;
