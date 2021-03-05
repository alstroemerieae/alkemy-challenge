import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'
import {useState} from 'react'


function App() {
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])

  const handleDeleteIncome = (incomeID) => {
    const newIncome = income.filter(item => item.id !== incomeID)
    setIncome(newIncome)
  }

  const handleDeleteExpense = (expenseID) => {
    const newExpense = expense.filter(item => item.id !== expenseID)
    setExpense(newExpense)
  }

  const handleUpdateIncome = (item) => {
    console.log(item)
    let newConcept = prompt("Please enter your the new concept:", `${item.concept}`);
    let newAmount = prompt("Please enter your the new amount:", `${item.amount}`);
    let newDate = prompt("Please enter your the new date:", `${item.date}`);
    
    let updateIncome = {
      concept: newConcept,
      amount: newAmount,
      date: newDate,
      operation: item.operation,
      id: item.id
    }
    
    console.log(updateIncome)
    setIncome([updateIncome]);
  }

  const handleUpdateExpense = (item) => {
    console.log(item)
    let newConcept = prompt("Please enter your the new concept:", `${item.concept}`);
    let newAmount = prompt("Please enter your the new amount:", `${item.amount}`);
    let newDate = prompt("Please enter your the new date:", `${item.date}`);
    
    let updateExpense = {
      concept: newConcept,
      amount: newAmount,
      date: newDate,
      operation: item.operation,
      id: item.id
    }
    
    console.log(updateExpense)
    setExpense([updateExpense]);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header income={income} expense={expense}/>
      </div>
      <div className="App-input">
        <Inputs income={income} setIncome={setIncome} expense={expense} setExpense={setExpense}/>
      </div>
      <div className="App-history">
        <History income={income} expense={expense} handleDeleteIncome={handleDeleteIncome} handleDeleteExpense={handleDeleteExpense} handleUpdateIncome={handleUpdateIncome} handleUpdateExpense={handleUpdateExpense}/>
      </div>
    </div>
  );
}

export default App;
