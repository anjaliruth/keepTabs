
import './App.css';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">KeepTabs</h1>
        <div className="totalDisplayShift">
        <List/>
        </div>
      </header>
    </div>
  );
}

export default App;
