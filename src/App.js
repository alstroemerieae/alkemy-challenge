import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'
import OperationDataService from "./services/OperationDataService";

export const HeaderContext = React.createContext();
export const HistoryContext = React.createContext();

function App() {

  // Arrays
  const [operations, setOperations] = useState([]);
  const incomesArray = operations.filter(item => item.type === "income");
  const expensesArray = operations.filter(item => item.type === "expense");

  // Variables
  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [type, setType] = useState("")

  // Sum all the items amount value in each array
  let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let currentBalance = totalIncome - totalExpense;

  // This will get and display all the created operations
  const retrieveOperations = () => {
    // GET Request
    OperationDataService.getAll()
      .then(response => {
        setOperations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // This will handle the values being submitted to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check type of operation (Income/Expense)
    switch (type) {
      // Handle incomes operation type
      case "income":
        const newIncome = {
          concept: concept,
          amount: amount,
          date: date,
          type: type,
          id: `${date}_${concept}_${amount}_${type}`
        }
        // POST Request
        OperationDataService.create(newIncome)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        setOperations([...operations, newIncome])
        break;
      
      // Handle expenses operation type
      case "expense":
        const newExpense = {
          concept: concept,
          amount: amount,
          date: date,
          type: type,
          id: `${date}_${concept}_${amount}_${type}`
        }
        // POST Request
        OperationDataService.create(newExpense)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        setOperations([...operations, newExpense])
        break;
      // Handle default (Error)
      default:
        window.alert("Error")
    }
    // Clear the inputs after being submitted
    setConcept("")
    setAmount("")
    setDate("")
    setType("")
  }
  
  const handleDelete = (array, itemID) => {
    // Create a filtered array without the items that match the itemID
    const filteredArray = array.filter(item => item.id !== itemID)
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
    let updatedItem = {
      concept: newConcept,
      amount: newAmount,
      date: newDate,
      type: item.type,
      id: item.id
    }
    // PUT Request
    OperationDataService.update(updatedItem.id, updatedItem)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
    // Delete the current item from the array (so the updated item can take its place)
    // Look for a cleaner solution (!)
    let indexToRemove = array.indexOf(item);
    const newArray = [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)]; // (!)
    setOperations([...newArray, updatedItem])
  }

  // This will display and update all operations saved in the server
  // Without this, deleted items in the client would still be stored into the server
  useEffect(() => {
    retrieveOperations();
  }, []);


  return (
    <div className="App">
        {/* Set variables like this with useContext like this inside Header */}
        {/* const {currentBalance, totalIncome, totalExpense} = useContext(HeaderContext); */}
        <HeaderContext.Provider value={{totalIncome, totalExpense, currentBalance}}>
          <Header />
        </HeaderContext.Provider>
        <Inputs
          concept={concept}
          setConcept={setConcept}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          type={type}
          setType={setType}
          handleSubmit={handleSubmit}
        />
        <HistoryContext.Provider value={{operations, incomesArray, expensesArray, handleUpdate, handleDelete}}>
          <History/>
        </HistoryContext.Provider>
    </div>
  );
}

export default App;
