import { useContext } from "react";
import OperationContext from "../context/OperationContext";

const InputDate = () => {
  const { date, setDate } = useContext(OperationContext);

  return (
  <div className="App-input__group">
    <label htmlFor="date">Fecha</label>
    <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
  </div>
  );
}

export default InputDate;