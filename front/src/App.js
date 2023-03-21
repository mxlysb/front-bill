import logo from './logo-bill.png';
import './App.css';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="bill-logo" alt="logo" />
        <Button label="Start!" onClick={() => alert('Botão clicado!')} />
      </header>
    </div>
    
    
  );
}

export default App;
