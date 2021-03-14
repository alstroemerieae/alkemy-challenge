import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'
import {useState} from 'react'
import OperationDataService from "./services/OperationDataService";


function App() {
  // Arrays
  const [operations, setOperations] = useState([]);
  const incomesArray = operations.filter(item => item.operation === "income");
  const expensesArray = operations.filter(item => item.operation === "expense");

  // Variables
  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [operation, setOperation] = useState("")

  // Functions
  // function checkLength(array) {
  //   if (array.length === 10) {
  //     array.shift()
  //   }
  // }

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check type of operation and create a new object in the corresponding array
    switch (operation) {
      // Handle income type submit
      case "income":
        const newIncome = {
          concept: concept,
          amount: amount,
          date: date,
          operation: operation,
          // IS this being passed on?
          id: `${date}_${concept}_${amount}_${operation}`
        }
        // POST Request
        OperationDataService.create(newIncome)
        .then(response => {
          // Where is this going? Where is operation being used?
          setOperation({
            id: response.data.id,
            concept: response.data.concept,
            amount: response.data.amount,
            operation: response.data.operation,
            date: response.data.date
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        // checkLength(operations);
        setOperations([...operations, newIncome])
        break;
      // Handle expense type submit
      case "expense":
        const newExpense = {
          concept: concept,
          amount: amount,
          date: date,
          operation: operation,
          id: `${date}_${concept}_${amount}_${operation}`
        }
        // POST Request
        OperationDataService.create(newExpense)
        .then(response => {
          // Where is this going? Where is operation being used?
          setOperation({
            id: response.data.id,
            concept: response.data.concept,
            amount: response.data.amount,
            operation: response.data.operation,
            date: response.data.date
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        // checkLength(operations);
        setOperations([...operations, newExpense])
        break;
      // Handle default type (Error)
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
    // DELETE Request
    OperationDataService.remove(itemID)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    setOperations(filteredArray)
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
      id: item.id
    }
    console.log(updateItem.id)
    OperationDataService.update(updateItem.id, updateItem)
    .then(response => {
      setOperation({
        id: response.data.id,
        concept: response.data.concept,
        amount: response.data.amount,
        operation: response.data.operation,
        date: response.data.date
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
    // Delete the current item from the array (so the updated item can take its place)
    // Look for a cleaner solution (!)
    let indexToRemove = array.indexOf(item);
    const newArray = [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)]; // (!)
    setOperations([...newArray, updateItem])
  }

  return (
    <div className="App">
        <Header
          incomesArray={incomesArray}
          expensesArray={expensesArray}
        />
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
        <History
          operations={operations}
          setOperations={setOperations}
          incomesArray={incomesArray}
          expensesArray={expensesArray}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
    </div>
  );
}

export default App;
