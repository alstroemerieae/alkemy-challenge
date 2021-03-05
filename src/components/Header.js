const Header = ({income, expense}) => {
  // Sum all the items amount value in each arrays
  let totalIncome = income.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let totalExpense = expense.reduce((sum, current) => sum + parseInt(current.amount), 0); // (!)
  let currentBalance = totalIncome - totalExpense;

  return (
    <div className="budget-container">
      <h2> Balance actual:</h2>
      <h1>{currentBalance}</h1>
      <h3> Ingresos: +{totalIncome} </h3>
      <h3> Egresos: -{totalExpense} </h3>
    </div>
  );
}

export default Header;