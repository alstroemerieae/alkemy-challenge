const Header = ({income, expense}) => {
  let totalIncome = income.reduce((sum, current) => sum + parseInt(current.amount), 0);
  let totalExpense = expense.reduce((sum, current) => sum + parseInt(current.amount), 0);

  let currentBalance = totalIncome - totalExpense;
  console.log(totalIncome, totalExpense, currentBalance)

  return (
    <div className="budget-container">
      <h1> Balance actual: ${currentBalance}</h1>
      <h2> Ingresos + ${totalIncome} </h2>
      <h2> Egresos - ${totalExpense} </h2>
    </div>
  );
}

export default Header;