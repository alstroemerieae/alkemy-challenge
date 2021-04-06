const InputType = ({type, setType}) => {
  return (
  <div className="App-input__group">
    <label htmlFor="operation">Tipo</label>
    <select name="operation" id="operation" value={type} onChange={e => setType(e.target.value)}>
      <option value="select">Seleccionar</option>
      <option value="income">Ingreso</option>
      <option value="expense">Egreso</option>
    </select>
  </div>
  );
}

export default InputType;