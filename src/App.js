import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'
import {useState} from 'react'


function App() {
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])

  return (
    <div className="App">
      <div className="App-header">
        <Header income={income} expense={expense}/>
      </div>
      <div className="App-input">
        <Inputs income={income} setIncome={setIncome} expense={expense} setExpense={setExpense}/>
      </div>
      <div className="App-history">
        <History income={income} expense={expense}/>
      </div>
    </div>
  );
}

export default App;
