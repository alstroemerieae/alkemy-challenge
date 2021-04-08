import { useContext } from "react";
import { InputsContext } from '../App.js'

const InputConcept = () => {
  const {concept, setConcept} = useContext(InputsContext);
  
  return (
  <div className="App-input__group">
    <label htmlFor="concept">Concepto</label>
    <input type="text" value={concept} onChange={e => setConcept(e.target.value)} placeholder="Ej. Supermercado"></input>
  </div>
  );
}

export default InputConcept;