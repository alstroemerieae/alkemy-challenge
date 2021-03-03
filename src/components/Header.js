const Header = ({income, expense}) => {
  let totalIncome = 0
  income.map((item) => (
    totalIncome = totalIncome + parseInt(item.amount)
    // console.log(`Income total is ${totalIncome}`)
  ))
  let totalExpense = 0
  expense.map((item) => (
    totalExpense = totalExpense + parseInt(item.amount)
    // console.log(`Income total is ${totalExpense}`)
  ))
  let currentBalance = totalIncome - totalExpense;

  return (
    <div className="budget-container">
      <h1> Balance actual: ${currentBalance}</h1>
      <h2> Ingresos + ${totalIncome} </h2>
      <h2> Egresos - ${totalExpense} </h2>
    </div>
  );
}

export default Header;