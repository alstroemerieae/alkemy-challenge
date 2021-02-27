const Inputs = () => {
  return (
    <div className="inputs-container">
      {/* Concept */}
      <div className="input-group">
        <label for="concept">Concepto</label>
        <input type="text" id="concept" name="concept" required minlength="1" maxlength="99" size="10"></input>
      </div>
      {/* Amount */}
      <div className="input-group">
        <label for="amount">Monto</label>
        <input type="number" id="amount" name="amount" required minlength="1" maxlength="99" size="10"></input>
      </div>
      {/* Date */}
      <div className="input-group">
        <label for="date">Fecha</label>
        <input type="date" id="date" name="date" required minlength="1" maxlength="99" size="10"></input>
      </div>
      {/* Income/Expense */}
      <div className="input-group">
        <label for="input-type">Tipo</label>
        <select name="input-type" id="input-type">
          <option value="income">Ingreso</option>
          <option value="expense">Egreso</option>
        </select>
      </div>
      <div className="input-group">
        <button id="add-button">Agregar</button>
      </div>
    </div>
  );
}

export default Inputs;