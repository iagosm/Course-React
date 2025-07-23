import './App.css';
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);


  // 2 add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
    // 3 - Carregamento dinamico
    const addedProduct = await res.json();
    setProducts((prev) => [...prev, addedProduct]);
    setName("");
    setPrice("");
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}  />
            </label>
            <label>
              <span>Preço:</span>
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}  />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
      </ul>
    </div>
  );
}

export default App;
