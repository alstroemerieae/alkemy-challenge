const Header = ({incomesArray, expensesArray}) => {
  // Sum all the items amount value in each arrays

  let totalIncome = incomesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let totalExpense = expensesArray.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let currentBalance = totalIncome - totalExpense;

  return (
    <div className="App-header">
      {/* Current Balance */}
      <div className="App-header__current-balance">
        <div className="App-header__current-balance--title">Balance actual:</div>
        <div className="App-header__current-balance--value">{currentBalance}</div>
      </div>
      {/* Total income */}
      <div className="App-header__total-income">
        <div className="App-header__total-income--title">Ingresos:</div>
        <div className="App-header__total-income--value">+{totalIncome}</div>
      </div>
      {/* Total expense */}
      <div className="App-header__total-expense">
        <div className="App-header__total-expense--title">Egresos:</div>
        <div className="App-header__total-expense--value">-{totalExpense}</div>
      </div>
    </div>
  );
}

export default Header;