import {useState} from 'react'

const Inputs = ({income, setIncome, expense, setExpense}) => {

  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [operation, setOperation] = useState("")
  console.log(expense)
  console.log(income)
  console.log(`Income length outside handleSubmit: ${income.length}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will create a new object with the properties that are passed in from the input values
    if (operation === "income") {
      const newIncome = {
        concept: concept,
        amount: amount,
        date: date,
        operation: operation
      }
      if (income.length === 10) {
        console.log("Income array is equal to 10")
        income.shift()
      }
      setIncome([...income, newIncome])
    } else if((operation === "expense")) {
      const newExpense = {
        concept: concept,
        amount: amount,
        date: date,
        operation: operation
      }
      if (expense.length === 10) {
        console.log("Expense array is equal to 10")
        expense.shift()
      }
      setExpense([...expense, newExpense])
    } else {
      console.log("Error on new item")
    }
    // This will clear the inputs after being submitted
    setConcept("")
    setAmount("")
    setDate("")
    setOperation(operation)
    // Console logs
    // console.log(`Concepto: ${concept}`)
    // console.log(`Monto: ${amount}`)
    // console.log(`Fecha: ${date}`)
    // console.log(`Tipo: ${operation}`)
    // console.log(income[0].amount)
    console.log(`Income length inside handleSubmit: ${income.length}`)
  }

  return (
    <form className="inputs-container">
      {/* Concept */}
      <div className="input-group">
        <label htmlFor="concept">Concepto</label>
        <input type="text" value={concept} onChange={e => setConcept(e.target.value)}></input>
      </div>
      {/* Amount */}
      <div className="input-group">
        <label htmlFor="amount">Monto</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} ></input>
      </div>
      {/* Date */}
      <div className="input-group">
        <label htmlFor="date">Fecha</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      </div>
      {/* Income/Expense */}
      <div className="input-group">
        <label htmlFor="operation">Tipo</label>
        <select name="operation" id="operation" onChange={e => setOperation(e.target.value)}>
          <option value="select">Seleccionar</option>
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