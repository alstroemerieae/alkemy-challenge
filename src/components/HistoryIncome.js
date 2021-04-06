const HistoryIncome = ({operations, incomesArray, handleUpdate, handleDelete}) => {
  return (
  <div className="App-history__income">
    <h3 className="App-history__income--title">Ingresos</h3>
    {/* Display all income operations */}
    {incomesArray.map(operation => (
      <div className="App-history__income-item" key={ operation.id }>
        <p className="App-history__income-item--date">{ operation.date }</p>
        <p className="App-history__income-item--amount">${ operation.amount }</p>
        <p className="App-history__income-item--concept">{ operation.concept }</p>
        <button className="btn-update" onClick={() => handleUpdate(operations, operation)}>Modificar</button>
        <button className="btn-delete" onClick={() => handleDelete(operations, operation.id)}>Eliminar</button>
      </div>
    ))}
  </div>
  );
}

export default HistoryIncome;