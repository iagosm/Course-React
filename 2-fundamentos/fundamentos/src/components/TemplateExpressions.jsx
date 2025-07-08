const TemplateExpressions = () => {

  const data = {
    name: 'Iago',
    age: 24,
    job: "Programador"
  };
  return (
    <div>
      <h1>Olá {data.name}</h1>
      <div className="containerName">
        <span>Voce trabalha como? {data.job}</span>
        <span>Quantos anos voce tem? {data.age}</span>
      </div>
    </div>
  )
}
export default TemplateExpressions;