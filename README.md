# Avançando no React

### **1. Imagens no React: Public vs. Assets**

Existem duas abordagens principais para gerenciar imagens em projetos React:

- **Pasta `public`:**
    - **Localização:** `public/`.
    - **Acesso:** As imagens são acessadas **diretamente pela raiz** (`/nome-da-imagem.jpg`) no atributo `src` da tag `<img>`.
    - **Como funciona:** O React "linka" a pasta `public` diretamente à URL raiz da sua aplicação, tornando o conteúdo dela acessível como se estivesse na pasta principal do servidor.
- **Pasta `assets` (dentro de `src`):**
    - **Localização:** Geralmente `src/assets/`.
    - **Acesso:** As imagens precisam ser **importadas** no seu componente (`import NomeDaImagem from './assets/nome-da-imagem.png'`). O `src` da tag `<img>` se torna dinâmico, usando a variável importada (`src={NomeDaImagem}`).
    - **Benefícios:** Esta abordagem é preferível para imagens que fazem parte do *bundle* da sua aplicação (imagens do projeto mesmo), pois o React processa e otimiza essas imagens durante o build.
- **Exemplo:**JavaScript

```jsx
import './App.css'
import Cidade from './assets/cidade.png' // Imagem em assets

function App() {
  return (
    <div>
      <h1>Avançado em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/campo.jpg" alt="Campo" />
      </div>
      {/* Imagem em assets (src) */}
      <div>
        <img src={Cidade} alt="Cidade" />
      </div>
    </div>
  )
}

export default App
```

---

### **2. O que são Hooks?**

- Hooks são **funções especiais** do React que permitem que você "ligue" recursos do React (como estado e ciclo de vida) em componentes de função.
- Todos os hooks **começam com `use`** (ex: `useState`, `useEffect`).
- Eles precisam ser **importados** de `react`.
- Podemos criar nossos próprios hooks, chamados de **Custom Hooks**, para reutilizar lógica com estado em diferentes componentes.
- São fundamentais para o desenvolvimento moderno em React e serão usados constantemente.

---

### **3. `useState` Hook**

- Um dos hooks mais utilizados, essencial para **gerenciar o estado** de dados em componentes.
- Variáveis comuns no JavaScript não causam a re-renderização do componente quando alteradas; o `useState` resolve isso.
- Retorna um array com dois elementos:
    1. A **variável** que armazena o estado atual do dado.
    2. Uma **função (`setter`)** para atualizar esse estado (geralmente nomeada como `setNomeDaVariavel`).
- **Exemplo:**JavaScript

```jsx
import { useState } from 'react';

const [number, setNumber] = useState(15); // 'number' é o estado, 'setNumber' é a função para alterá-lo

// No JSX:
<div>
  <p>Valor Number: {number}</p>
  <button onClick={() => setNumber(125)}>Mudar variável</button>
</div>
```

---

### **4. Renderização de Listas**

- É a forma de exibir coleções de dados (geralmente arrays) no template do React.
- Utilizamos o método **`map()`** do JavaScript para iterar sobre o array e retornar JSX para cada item.
- Podemos inserir **JSX completo** dentro de cada iteração.

---

### **5. A Prop `Key`**

- Ao renderizar listas, o React exige uma propriedade **`key` única** para cada item iterado.
- **Propósito:** Ajuda o React a identificar quais itens foram adicionados, removidos ou alterados na lista, otimizando a re-renderização e evitando bugs.
- **Melhor prática:** Usar um **ID único** do próprio dado (ex: `item.id`).
- **Último recurso:** Se não houver ID único, pode-se usar o **índice (`index`)** do método `map` como `key`, mas evite se a ordem da lista puder mudar.
- **Exemplo:**JavaScript
    
    
    ```jsx
    {users.map((user) => (
      <div key={user.id}>{user.name}</div> // Usando user.id como key
    ))}
    ```
    

---

### **6. Previous State**

- O **`previous state`** é um recurso do `useState` que permite acessar o **valor anterior do estado** dentro da função `setter`.
- É crucial quando o novo estado depende do estado anterior (ex: atualizar uma lista, incrementar um contador).
- A função `setter` do `useState` (ex: `setUsers`, `setNumber`) pode receber uma função como argumento, e o **primeiro parâmetro dessa função será sempre o `previous state`**.
- **Exemplo:**JavaScript

```jsx
const [users, setUsers] = useState([
  { id: 1, name: "Matheus" },
  // ... outros usuários
  { id: 10, name: "Igor" },
]);

const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 11); // Gera um ID entre 0 e 10
  console.log("Tentando deletar ID:", randomNumber);

  setUsers((prevUsers) => { // prevUsers é o array de usuários ANTES da atualização
    console.log("Usuários antes da atualização:", prevUsers);
    // Retorna um novo array sem o usuário com o randomNumber
    return prevUsers.filter((user) => randomNumber !== user.id);
  });
};

// No JSX:
<button onClick={deleteRandom}>Deletar Usuário Aleatório</button>
```

---

### **7. Renderização Condicional**

- Exibe ou esconde partes do template (JSX) **baseado em uma condição**.
- **Uso comum:** Exibir diferentes elementos para usuários logados/deslogados, mostrar mensagens de erro, etc.
- **Operador lógico `&&` (AND):**
    - Sintaxe: `{condição && <Elemento />}`
    - O `<Elemento />` só será renderizado se a `condição` for `true`.
- **Operador Ternário:**
    - Sintaxe: `{condição ? <Bloco1 /> : <Bloco2 />}`
    - Se a `condição` for `true`, renderiza `<Bloco1 />`; se for `false`, renderiza `<Bloco2 />`.
- **Exemplo:**JavaScript
    
    
    ```jsx
    const CondicionalRender = () => {
      const [x] = useState(false);
      const name = "João"; // Exemplo para o ternário
    
      return (
        <div>
          <h1>Isso será exibido?</h1>
          {/* Operador && */}
          {x && <p>Se 'x' for true, sim!</p>}
          {!x && <p>Agora 'x' é falso.</p>}
    
          {/* Operador Ternário */}
          {name === "João" ? (
            <div>O nome é João</div>
          ) : (
            <div>Nome não encontrado</div>
          )}
        </div>
      );
    };
    ```
    

---

### **8. Introdução a Props (Propriedades)**

- **`Props`** (abreviação de "properties") são o principal mecanismo para **passar dados de um componente pai para um componente filho**.
- São recebidas pelo componente filho como um **objeto** no argumento da sua função.
- Extremamente úteis para reutilizar componentes com dados dinâmicos (ex: dados de um banco de dados).
- **Exemplo:**JavaScript
    
    
    ```jsx
    // Componente Pai
    import { useState } from 'react';
    import ShowUserName from './ShowUserName'; // Importa o componente filho
    
    const App = () => {
      const [userName] = useState("Maria");
    
      return (
        <div>
          {/* Passando 'userName' como uma prop chamada 'name' para ShowUserName */}
          <ShowUserName name={userName} />
        </div>
      );
    };
    
    export default App;
    
    // Componente Filho (ShowUserName.jsx)
    const ShowUserName = (props) => { // Recebe as props como um objeto 'props'
      console.log("Props recebidas:", props); // { name: "Maria" }
      return (
        <div>
          <h2>O nome do Usuário: {props.name}</h2> {/* Acessa a prop 'name' */}
        </div>
      );
    };
    
    export default ShowUserName;
    ```
    

---

### **9. Desestruturando Props**

- Uma prática comum e recomendada para simplificar o acesso às props quando um componente recebe várias.
- Em vez de acessar `props.nome` ou `props.idade`, você pode **desestruturar** o objeto `props` diretamente no argumento da função do componente.
- **Exemplo:**JavaScript
    
    
    ```jsx
    // Componente Pai
    // ...
    <CarDetails brand="Ford" km="28.091" color="Vermelho" />
    
    // Componente Filho (CarDetails.jsx)
    // Desestruturando as props diretamente no argumento da função
    const CarDetails = ({ brand, km, color }) => {
      return (
        <div>
          <h2>Detalhes do carro:</h2>
          <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
          </ul>
        </div>
      );
    };
    
    export default CarDetails;
    ```
    

---

### **10. Reutilização de Componentes com Props e Loops**

- As `props` são a chave para a **reutilização eficiente de componentes**.
- Ao ter um componente genérico (ex: `CarDetails`), você pode passá-lo dados diferentes via props e **reaproveitá-lo** várias vezes.
- Quando se tem um **array de dados** (ex: lista de 1000 carros), combinamos a **renderização de listas (`map`)**, a **reutilização de componentes** e as **props** para exibir dinamicamente.

---

### **11. React Fragments**

- Permitem que você agrupe vários elementos JSX sem adicionar um nó extra no DOM (Document Object Model) desnecessariamente (como uma `div`).
- **Sintaxe:** `<>...</>` (sintaxe curta) ou `<React.Fragment>...</React.Fragment>`.
- **Uso:** Útil quando um componente precisa retornar múltiplos elementos irmãos, mas a raiz do componente não pode ter mais de um elemento pai (regra do React).
- **Exemplo:**JavaScript
    
    `// Em vez de
    // <div>
    //   <p>Elemento 1</p>
    //   <p>Elemento 2</p>
    // </div>
    
    // Use:
    <>
      <p>Elemento 1</p><p>Elemento 2</p>
    </>`
    

---

### **12. `Children` Prop**

- A `children` prop é um recurso especial que permite que você **passe JSX diretamente para dentro de um componente**, como conteúdo.
- O componente age como um "container", e o JSX passado entre as suas tags de abertura e fechamento é acessível via `props.children`.
- **Exemplo:**JavaScript
    
    `// Componente Container (Container.jsx)
    const Container = ({ children }) => { // 'children' é desestruturado das props
      return (
        <div>
          <h2>Este é o título do container</h2>
          {children} {/* Aqui será renderizado o JSX passado pelo pai */}
        </div>
      );
    };
    
    export default Container;
    
    // No Componente Pai:
    <Container>
      <p>Este é o conteúdo passado para o container.</p>
      <span>Pode ser qualquer JSX!</span>
    </Container>`
    

---

### **13. Funções em Props**

- Você pode **passar funções de um componente pai para um componente filho via props** normalmente.
- No componente filho, essa função pode ser **ativada por um evento** (ex: clique de botão).
- Isso permite que o componente filho "comunique" eventos de volta para o componente pai.
- **Exemplo:**JavaScript
    
    `// Componente Pai
    const App = () => {
      function showMessage() {
        console.log("Evento acionado pelo componente filho!");
      }
    
      return (
        <div>
          {/* Passando a função 'showMessage' como prop 'myFunction' */}
          <ExecuteFunction myFunction={showMessage} />
        </div>
      );
    };
    export default App;
    
    // Componente Filho (ExecuteFunction.jsx)
    const ExecuteFunction = ({ myFunction }) => { // Desestruturando 'myFunction' das props
      return (
        <div>
          <h2>Executando a função</h2>
          <button onClick={myFunction}>Clique aqui para executar a função</button>
        </div>
      );
    };
    export default ExecuteFunction;`
    

---

### **14. Elevação de State (State Lifting)**

- **Conceito:** Refere-se à prática de **mover o estado de um componente filho para um de seus componentes pais**.
- **Quando usar:** Quando múltiplos componentes irmãos (ou um componente pai e um filho) precisam acessar ou alterar o mesmo pedaço de estado.
- **Como funciona:** O estado é mantido no componente pai mais próximo que precisa compartilhar esse estado. O componente pai então passa esse estado e as funções para atualizá-lo (via props) para seus filhos, conforme necessário.
- **Benefício:** Garante que o estado seja a "fonte da verdade" e que as alterações sejam coordenadas de forma centralizada, facilitando a comunicação entre componentes.