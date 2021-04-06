import HeaderBalanceItem from './HeaderBalanceItem';
import HeaderIncomeItem from './HeaderIncomeItem';
import HeaderExpenseItem from './HeaderExpenseItem';

const Header = ({totalIncome, totalExpense, currentBalance}) => {
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