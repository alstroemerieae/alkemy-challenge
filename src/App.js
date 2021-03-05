import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'
import {useState} from 'react'

function App() {
  // Arrays
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])

  // Variables
  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [operation, setOperation] = useState("")

  // Functions
  function checkLength(array) {
    if (array.length === 10) {
      array.shift()
    }
  }

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check type of operation and create a new object in the corresponding array
    switch (operation) {
      case "income":
        const newIncome = {
          concept: concept,
          amount: amount,
          date: date,
          operation: operation,
          id: `${date}_${concept}_${amount}_${operation}`
        }
        checkLength(income);
        setIncome([...income, newIncome])
        break;
      case "expense":
        const newExpense = {
          concept: concept,
          amount: amount,
          date: date,
          operation: operation,
          id: `${date}_${concept}_${amount}_${operation}`
        }
        checkLength(expense);
        setExpense([...expense, newExpense])
        break;
      default:
        window.alert("Error")
    }
    // Clear the inputs after being submitted
    setConcept("")
    setAmount("")
    setDate("")
    // Set operation input to be the same as the previous operation
    setOperation(operation)
  }

  const handleDelete = (array, itemID) => {
    // Create filtered array without the item that matches the itemID
    const filteredArray = array.filter(item => item.id !== itemID) // (!)
    // Check which array to send the filtered array to
    if (array === income) {
      setIncome(filteredArray)
    } else {
      setExpense(filteredArray)
    }
  }

  const handleUpdate = (array, item) => {
    // Prompt input values
    let newConcept = prompt("Please enter your the new concept:", `${item.concept}`);
    let newAmount = prompt("Please enter your the new amount:", `${item.amount}`);
    let newDate = prompt("Please enter your the new date:", `${item.date}`);
    // Create a new object with the prompt input values given
    let updateItem = {
      concept: newConcept,
      amount: newAmount,
      date: newDate,
      operation: item.operation,
      id: `${newDate}_${newConcept}_${newAmount}_${item.operation}`
    }
    // Delete the current item from the array (so the updated item can take its place)
    let indexToRemove = array.indexOf(item);
    const newArray = [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)]; // (!)
    // Check which array to send the updated item to
    if (array === income) {
      setIncome([...newArray, updateItem])
    } else {
      setExpense([...newArray, updateItem])
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header
          income={income}
          expense={expense}
        />
      </div>
      <div className="App-input">
        <Inputs
          concept={concept}
          setConcept={setConcept}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          setOperation={setOperation}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="App-history">
        <History
          income={income}
          expense={expense}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
