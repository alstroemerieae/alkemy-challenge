const HistoryExpense = ({operations, expensesArray, handleUpdate, handleDelete}) => {
  return (
  <div className="App-history__expense">
    <h3 className="App-history__expense--title">Egresos</h3>
    {/* Display all expense operations */}
    {expensesArray.map(operation => (
      <div className="App-history__expense-item" key={ operation.id }>
        <p className="App-history__expense-item--date">{ operation.date }</p>
        <p className="App-history__expense-item--amount">${ operation.amount }</p>
        <p className="App-history__expense-item--concept">{ operation.concept }</p>
        <button className="btn-update" onClick={() => handleUpdate(operations, operation)}>Modificar</button>
        <button className="btn-delete" onClick={() => handleDelete(operations, operation.id)}>Eliminar</button>
      </div>
    ))}
  </div>
  );
}

export default HistoryExpense;