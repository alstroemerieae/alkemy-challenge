import { useContext } from "react";
import { InputsContext } from '../App.js'

const InputDate = () => {
  const {date, setDate} = useContext(InputsContext);

  return (
  <div className="App-input__group">
    <label htmlFor="date">Fecha</label>
    <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
  </div>
  );
}

export default InputDate;