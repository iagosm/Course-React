import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  console.log("SomeData: ", someData);
  const [number, setNumber] = useState(15);
  console.log(number);
  return (
    <div>
      <div>
        <h2>Metodo que não funciona</h2>
        <p>Valor SomeData: {someData}</p>
        <button onClick={() => (someData = 35)}>Mudar SomeData!</button>
      </div>
      <hr />
      <div>
        <h2>Metodo que funciona</h2>
        <p>Valor Number: {number}</p>
        <button onClick={() => setNumber(35)}>Mudar Number!</button>
      </div>
    </div>
  );
};

export default ManageData;
