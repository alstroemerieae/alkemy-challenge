const History = ({income, expense, handleDelete, handleUpdate}) => {
  return (
    <div className="history-container">
      <div className="income-history">
        <h2>Ingresos</h2>
        {income.map(incomeItem => (
          <div className="income-item" key={incomeItem.id}>
            <p>${ incomeItem.amount }</p>
            <p>{ incomeItem.concept }</p>
            <p>{ incomeItem.date }</p>
            <button className="button" onClick={() => handleUpdate(income, incomeItem)}>Modificar</button>
            <button className="button" onClick={() => handleDelete(income, incomeItem.id)}>Eliminar</button>
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
            <button className="button" onClick={() => handleUpdate(expense, expenseItem)}>Modificar</button>
            <button className="button" onClick={() => handleDelete(expense, expenseItem.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
