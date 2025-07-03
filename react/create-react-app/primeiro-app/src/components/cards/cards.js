import Card from "../card/card";

const showCardColor = (color) =>{
    console.log(color)
}

const cardsTitle = [
  "Titulo card 1",
  "Titulo Card 2",
  "TItulo Card 3",
  "TItulo Card 4",
];

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        {cardsTitle.map((cardsTitle, index) => {
          return (
            <Card key={index} showCardColor={showCardColor}>
              <h3>{cardsTitle}</h3>
              <p>TextCard Numero do card, arrocha!</p>
            </Card>
          );
        })}

        <Card color="blue" showCardColor={showCardColor}>
              <h3>Card com Fundo Azul</h3>
              <p>TextCard Numero do card Aleatorio, arrocha!</p>
            </Card>

      </div>
    </div>
  );
};

export default Cards;
