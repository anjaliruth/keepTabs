
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory</h1>
        <List/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
