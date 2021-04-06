import HeaderBalanceItem from './HeaderBalanceItem';
import HeaderIncomeItem from './HeaderIncomeItem';
import HeaderExpenseItem from './HeaderExpenseItem';

const Header = ({incomesArray, expensesArray}) => {
  // Sum all the items amount value in each array
  let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
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