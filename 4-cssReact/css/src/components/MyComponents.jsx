import './MyComponents.css';

const MyComponents = () => {
  return (
    <div>
      <h1>Css de componente</h1>
      <p>Esté é o paragrafo do componente</p>
      {/* Inline */}
      <p style={{color: "red", backgroundColor: "purple", borderTop: "20px"}}
      >Esté é o paragrafo do componente</p>
    </div>
  )
}

export default MyComponents