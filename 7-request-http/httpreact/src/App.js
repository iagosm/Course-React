import './App.css';
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:4000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 custom hook 
  const { data : items, httpConfig, loading, error } = useFetch(url);
  // 1 - Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);



  // 2 add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    // const res = await fetch(url, httpConfig);
    // // 3 - Carregamento dinamico
    // const addedProduct = await res.json();
    // setProducts((prev) => [...prev, addedProduct]);
    // 5 Refatorando post
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  }

  const handleDelete = async(id) => {
    httpConfig(id, 'DELETE')
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 Loading */}
      {loading && <p>Carregando</p>}
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {!error && (
      <ul style={{ border: '1px solid #ccc', padding: '20px'}}>
        {items && items.map((product) => (
           <li
            key={product.id}
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              padding: '8px',
              listStyle: 'none',
              borderBottom: '1px solid #ccc'
            }}
          >
            <span>{product.name} - R$: {product.price}</span>
            <button onClick={() => handleDelete(product.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      )}
      </div>
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
          {/* 7 State Loading */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
