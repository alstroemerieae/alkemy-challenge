import { useContext, useEffect } from "react";
import OperationContext from "../context/OperationContext";

import HeaderBalanceItem from './HeaderBalanceItem';
import HeaderIncomeItem from './HeaderIncomeItem';
import HeaderExpenseItem from './HeaderExpenseItem';

const Header = () => {
  const { incomesArray, expensesArray, RetrieveOperations } = useContext(OperationContext);

  // Sum of all the income items amount
  let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  // Sum of all the expense items amount
  let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  // Result of the income minus the expense
  let currentBalance = totalIncome - totalExpense;

  // This will display and update all operations saved in the server
  // Without this, deleted items in the client would still be stored into the server
  useEffect(() => {
    RetrieveOperations();
  }, []);

  return (
    <div className="App-header">
      {/* Current Balance */}
      <HeaderBalanceItem title="Balance actual:" value={currentBalance}/>
      {/* Total income */}
      <HeaderIncomeItem title="Ingresos:" value={totalIncome}/>
      {/* Total expense */}
      <HeaderExpenseItem title="Egresos:" value={totalExpense}/>
    </div>
  );
}

export default Header;