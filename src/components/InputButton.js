import { useContext } from "react";
import { InputsContext } from '../App.js'

const InputButton = () => {
  const {handleSubmit} = useContext(InputsContext);

  return (
  <div className="App-input__group">
    <button className="btn-add" onClick={handleSubmit}>Agregar</button>
  </div>
  );
}

export default InputButton;