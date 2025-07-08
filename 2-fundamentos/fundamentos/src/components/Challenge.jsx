const Challenge = () => {
  const value1 = 23;
  const value2 = 50;

  return (
    <div>
      <h1>Aparecerá o resultado após o click no console</h1>
      <button onClick={() => {console.log(value1 + value2)}}>Click aqui pae para calcular</button>

    </div>
  )
}

export default Challenge