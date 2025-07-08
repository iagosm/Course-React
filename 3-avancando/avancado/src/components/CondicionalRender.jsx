import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora X é falso</p>}

      <hr />
      {name === "João" ? (
        <div>O nome é João</div>
      ) : (
        <div>Nome não encontrado</div>
      )}
      <button onClick={() => setName("Iago")}>Mudar nome!</button>
      <button onClick={() => setName("João")}>Voltar nome ao normal!</button>
    </div>
  );
};

export default CondicionalRender;
