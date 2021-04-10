import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputButton = () => {
  const { HandleSubmit } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <button className="btn-add" onClick={ HandleSubmit }>Agregar</button>
  </div>
  );
}

export default InputButton;