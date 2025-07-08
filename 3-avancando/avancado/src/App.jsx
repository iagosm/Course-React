import { useState } from "react";
import "./App.css";
import ImagemRandomica from "./assets/cidade.png";
import CondicionalRender from "./components/CondicionalRender.jsx";
import ListRender from "./components/ListRender.jsx";
import ManageData from "./components/ManageData.jsx";
import ShowUserName from "./components/ShowUserName.jsx";
import CarDetails from "./components/CarDetails.jsx";
import Fragment from "./components/Fragment.jsx";
import Container from "./components/Container.jsx";
import ExecuteFunction from "./components/ExecuteFunction.jsx";
import Message from "./components/Message.jsx";
import ChangeMessageState from "./components/ChangeMessageState.jsx";

function App() {
  const [userName] = useState("Maria");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Porsche", color: "Preto", newCar: false, km: 15000 },
    { id: 3, brand: "Lamborghini", color: "Verde", newCar: true, km: 500 },
    { id: 4, brand: "Mercedes-Benz", color: "Prata", newCar: false, km: 30000 },
    { id: 5, brand: "Audi", color: "Azul", newCar: true, km: 100 },
    { id: 6, brand: "BMW", color: "Branco", newCar: false, km: 22000 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Avancado em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/ia.jpeg" alt="Imagem gerada por IA" />
      </div>
      {/* Imagem em Assets */}
      <img
        src={ImagemRandomica}
        alt="Cidade em desenho Japones"
        style={{ width: "400px", height: "400px" }}
      />
      {/* Metodo que não funciona para atualizar */}
      <ManageData />
      <ListRender />
      <hr />
      <CondicionalRender />
      <hr />
      {/* props */}
      <ShowUserName name={userName} />
      <hr />
      {/* Destructuring */}
      <CarDetails brand="Ford" km={28.091} color="Vermelho" newCar={true} />
      {/* Reaproveitando */}
      <CarDetails brand="VW" km={0} color="Azul" newCar={false} />
      <CarDetails brand="Fiat" km={4.5} color="Branco" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
          key={car.id}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      {/* execytar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
