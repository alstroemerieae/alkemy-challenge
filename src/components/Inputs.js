const Inputs = ({concept, setConcept, amount, setAmount, date, setDate, setOperation, handleSubmit}) => {
  return (
    <form className="inputs-container">
      {/* Concept */}
      <div className="input-group">
        <label htmlFor="concept">Concepto</label>
        <input type="text" value={concept} onChange={e => setConcept(e.target.value)}></input>
      </div>
      {/* Amount */}
      <div className="input-group">
        <label htmlFor="amount">Monto</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} ></input>
      </div>
      {/* Date */}
      <div className="input-group">
        <label htmlFor="date">Fecha</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      </div>
      {/* Income/Expense */}
      <div className="input-group">
        <label htmlFor="operation">Tipo</label>
        <select name="operation" id="operation" onChange={e => setOperation(e.target.value)}>
          <option value="select">Seleccionar</option>
          <option value="income">Ingreso</option>
          <option value="expense">Egreso</option>
        </select>
      </div>
      {/* Add button */}
      <div className="input-group">
        <button id="add-button" onClick={handleSubmit}>Agregar</button>
      </div>
    </form>
  );
}

export default Inputs;
