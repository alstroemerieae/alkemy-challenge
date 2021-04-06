const InputAmount = ({amount, setAmount}) => {
  return (
  <div className="App-input__group">
    <label htmlFor="amount">Monto</label>
    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} ></input>
  </div>
  );
}

export default InputAmount;