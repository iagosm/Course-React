const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <h2>Executando a função</h2>
      <button onClick={myFunction}>Clique aqui para executar a função </button>
    </div>
  );
};

export default ExecuteFunction;
