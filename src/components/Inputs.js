const Inputs = ({concept, setConcept, amount, setAmount, date, setDate, setOperation, handleSubmit}) => {
  return (
    <form className="App-input">
      {/* Concept */}
      <div className="App-input__group">
        <label htmlFor="concept">Concepto</label>
        <input type="text" value={concept} onChange={e => setConcept(e.target.value)} placeholder="Ej. Supermercado"></input>
      </div>
      {/* Amount */}
      <div className="App-input__group">
        <label htmlFor="amount">Monto</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} ></input>
      </div>
      {/* Date */}
      <div className="App-input__group">
        <label htmlFor="date">Fecha</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      </div>
      {/* Income/Expense */}
      <div className="App-input__group">
        <label htmlFor="operation">Tipo</label>
        <select name="operation" id="operation" onChange={e => setOperation(e.target.value)}>
          <option value="select">Seleccionar</option>
          <option value="income">Ingreso</option>
          <option value="expense">Egreso</option>
        </select>
      </div>
      {/* Add button */}
      <div className="App-input__group">
        <button className="btn-add" onClick={handleSubmit}>Agregar</button>
      </div>
    </form>
  );
}

export default Inputs;
