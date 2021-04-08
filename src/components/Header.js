import { useContext } from "react";
import { HeaderContext } from '../App.js'

import HeaderBalanceItem from './HeaderBalanceItem';
import HeaderIncomeItem from './HeaderIncomeItem';
import HeaderExpenseItem from './HeaderExpenseItem';

const Header = () => {
  const {incomesArray, expensesArray} = useContext(HeaderContext);

  // Sum of all the income items amount
  let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  // Sum of all the expense items amount
  let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  // Result of the income minus the expense
  let currentBalance = totalIncome - totalExpense;

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