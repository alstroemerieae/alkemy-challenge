import { createContext, useState} from "react";
import OperationDataService from "../services/OperationDataService";

export const OperationContext = createContext();

export const OperationContextProvider = (props) => {
  const [operations, setOperations] = useState([]);
  const incomesArray = operations.filter(item => item.type === "income");
  const expensesArray = operations.filter(item => item.type === "expense");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const RetrieveOperations = () => {
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

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Check type of operation (Income/Expense)
    switch (type) {
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

  const HandleDelete = (array, itemID) => {
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

  const HandleUpdate = (array, item) => {
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

  return (
    <OperationContext.Provider
      value={{
        operations,
        setOperations,
        incomesArray,
        expensesArray,
        concept,
        setConcept,
        amount,
        setAmount,
        date,
        setDate,
        type,
        setType,
        RetrieveOperations,
        HandleSubmit,
        HandleDelete,
        HandleUpdate
      }}>
        {props.children}
    </OperationContext.Provider>
  );
};

export default OperationContext;