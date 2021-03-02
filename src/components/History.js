const History = ({income, expense, index}) => {
  return (
    <div className="history-container">
      <div className="income-history">
        <h2>Ingresos</h2>
        {income.map((item) => (
          <div className="income-item" key={index}>
            <p>${ item.amount }</p>
            <p>{ item.concept }</p>
            <p>{ item.date }</p>
            <button className="button">Modificar</button>
            <button className="button">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="expenses-history">
        <h2>Egresos</h2>
        {expense.map((item) => (
          <div className="expense-item" key={index}>
            <p>${ item.amount }</p>
            <p>{ item.concept }</p>
            <p>{ item.date }</p>
            <button className="button">Modificar</button>
            <button className="button">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;