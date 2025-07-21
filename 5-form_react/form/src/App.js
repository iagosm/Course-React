import './App.css';
import MyForm from './components/MyForm';


function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{name: "Iago Sousa", email: "josias@gmail.com", role: "adm", bio: "bio de advogado"}} />
    </div>
  );
}

export default App;
