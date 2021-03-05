const History = ({income, expense, handleDeleteIncome, handleDeleteExpense, handleUpdateIncome, handleUpdateExpense}) => {
  return (
    <div className="history-container">
      <div className="income-history">
        <h2>Ingresos</h2>
        {income.map(incomeItem => (
          <div className="income-item" key={incomeItem.id}>
            <p>${ incomeItem.amount }</p>
            <p>{ incomeItem.concept }</p>
            <p>{ incomeItem.date }</p>
            <button className="button" onClick={() => handleUpdateIncome(incomeItem)}>Modificar</button>
            <button className="button" onClick={() => handleDeleteIncome(incomeItem.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="expenses-history">
        <h2>Egresos</h2>
        {expense.map(expenseItem => (
          <div className="expense-item" key={expenseItem.id}>
            <p>${ expenseItem.amount }</p>
            <p>{ expenseItem.concept }</p>
            <p>{ expenseItem.date }</p>
            <button className="button" onClick={() => handleUpdateExpense(expenseItem)}>Modificar</button>
            <button className="button" onClick={() => handleDeleteExpense(expenseItem.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
