import HistoryIncome from "./HistoryIncome";
import HistoryExpense from "./HistoryExpense";

const History = ({operations, incomesArray, expensesArray, handleUpdate, handleDelete}) => {
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
