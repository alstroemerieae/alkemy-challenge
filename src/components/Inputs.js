import {useState} from 'react'

const Inputs = () => {
  const [items, setItems] = useState([])
  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  // Might have to change this
  const [type, setType] = useState("income")
  // console.log(`the type of the items variable is ${typeof items}`)
  console.log(items)

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will create a new object with the properties that are passed in from the input values
    const newItem = {
      concept: concept,
      amount: amount,
      date: date,
      type: type
    }
    // console.log(typeof newItem)
    // console.log(newItem)
    // This will add the current {newItem}(object) to [items](array)
    setItems([...items, newItem])
    // This will clear the inputs
    setConcept("")
    setAmount("")
    setDate("")
    setType("")
    // Console logs
    // console.log(`Concepto: ${concept}`)
    // console.log(`Monto: ${amount}`)
    // console.log(`Fecha: ${date}`)
    // console.log(`Tipo: ${type}`)
  }

  return (
    <form className="inputs-container">
      {/* Concept */}
      <div className="input-group">
        <label for="concept">Concepto</label>
        <input type="text" value={concept} onChange={e => setConcept(e.target.value)}></input>
      </div>
      {/* Amount */}
      <div className="input-group">
        <label for="amount">Monto</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} ></input>
      </div>
      {/* Date */}
      <div className="input-group">
        <label for="date">Fecha</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      </div>
      {/* Income/Expense */}
      <div className="input-group">
        <label for="input-type">Tipo</label>
        <select name="input-type" id="input-type" onChange={e => setType(e.target.value)}>
          <option value="income">Ingreso</option>
          <option value="expense">Egreso</option>
        </select>
      </div>
      {/* Add button */}
      <div className="input-group">
        <button id="add-button" onClick={handleSubmit}>Agregar</button>
      </div>
    </form>
  );
}

export default Inputs;