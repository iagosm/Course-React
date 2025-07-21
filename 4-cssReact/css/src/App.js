import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  // const n = 15;
  // const [name] = useState('Matheus');
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponents />
      {/* Classe dinamica*/}
      <h2 className={redTitle ? "red-title" : 'title'}>Este titulo vai ter classe dinamico</h2>
      {/* Css Modules */}
      <Title />
    </div>
  );
}

export default App;
