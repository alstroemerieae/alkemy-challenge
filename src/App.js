import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-input">
        <Inputs />
      </div>
      <div className="App-history">
        <History />
      </div>
    </div>
  );
}

export default App;
