import { useEffect } from "react";
import OperationDataService from "../services/OperationDataService";
import HistoryIncome from "./HistoryIncome";
import HistoryExpense from "./HistoryExpense";

const History = ({operations, setOperations, incomesArray, expensesArray, handleUpdate, handleDelete}) => {
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

  useEffect(() => {
    retrieveOperations();
  }, []);

  return (
    <div className="App-history">
      {/* Income History */}
      <HistoryIncome operations={operations} incomesArray={incomesArray} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
      {/* Expense History */}
      <HistoryExpense operations={operations} expensesArray={expensesArray} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    </div>
  );
}

export default History;
