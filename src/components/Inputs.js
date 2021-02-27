const Inputs = () => {
  return (
    <div className="inputs-container">
      {/* Concept */}
      <label for="concept">Concepto:</label>
      <input type="text" id="concept" name="concept" required minlength="1" maxlength="99" size="10"></input>
      {/* Total amount */}
      <label for="amount">Monto:</label>
      <input type="number" id="amount" name="amount" required minlength="1" maxlength="99" size="10"></input>
      {/* Date */}
      <label for="date">Fecha:</label>
      <input type="date" id="date" name="date" required minlength="1" maxlength="99" size="10"></input>
      {/* Income */}
      <label for="income">Ingreso</label>
      <input type="radio" id="income" name="input-type" value="income"></input>
      {/* Expense */}
      <label for="expense">Egreso</label>
      <input type="radio" id="expense" name="input-type" value="expense"></input>
    </div>
  );
}

export default Inputs;