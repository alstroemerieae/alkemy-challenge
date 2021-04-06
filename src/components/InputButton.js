const InputButton = ({handleSubmit}) => {
  return (
  <div className="App-input__group">
    <button className="btn-add" onClick={handleSubmit}>Agregar</button>
  </div>
  );
}

export default InputButton;