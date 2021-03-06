const History = ({income, expense, handleDelete, handleUpdate}) => {
  return (
    <div className="App-history">
      <div className="App-history__income">
        <h3 className="App-history__income--title">Ingresos</h3>
        {income.map(incomeItem => (
          <div className="App-history__income-item" key={incomeItem.id}>
            <p className="App-history__income-item--date">{ incomeItem.date }</p>
            <p className="App-history__income-item--amount">${ incomeItem.amount }</p>
            <p className="App-history__income-item--concept">{ incomeItem.concept }</p>
            <button className="btn-update" onClick={() => handleUpdate(income, incomeItem)}>Modificar</button>
            <button className="btn-delete" onClick={() => handleDelete(income, incomeItem.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="App-history__expense">
        <h3 className="App-history__expense--title">Egresos</h3>
        {expense.map(expenseItem => (
          <div className="App-history__expense-item" key={expenseItem.id}>
            <p className="App-history__expense-item--date">{ expenseItem.date }</p>
            <p className="App-history__expense-item--amount">${ expenseItem.amount }</p>
            <p className="App-history__expense-item--concept">{ expenseItem.concept }</p>
            <button className="btn-update" onClick={() => handleUpdate(expense, expenseItem)}>Modificar</button>
            <button className="btn-delete" onClick={() => handleDelete(expense, expenseItem.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
