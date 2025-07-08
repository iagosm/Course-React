const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e)
    console.log("Ativou o evento?")
  }

  const renderSomething = (x) => {
    if(x) {
      return <h2>Renderizando isso</h2>
    } else {
      return <h2>Também posso está Renderizando isso</h2>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log('clickou')} >Clique aqui também</button>
      </div>
      {renderSomething(true)}
    </div>
  )

}
export default Events;