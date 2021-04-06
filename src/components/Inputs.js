import InputConcept from "./InputConcept"
import InputAmount from "./InputAmount"
import InputDate from "./InputDate"
import InputType from "./InputType"
import InputButton from "./InputButton"

const Inputs = ({concept, setConcept, amount, setAmount, date, setDate, type, setType, handleSubmit}) => {
  return (
    <form className="App-input">
      {/* Concept */}
      <InputConcept concept={concept} setConcept={setConcept}/>
      {/* Amount */}
      <InputAmount amount={amount} setAmount={setAmount}/>
      {/* Date */}
      <InputDate date={date} setDate={setDate}/>
      {/* Type (Income/Expense) */}
      <InputType type={type} setType={setType}/>
      {/* Add button */}
      <InputButton handleSubmit={handleSubmit}/>
    </form>
  );
}

export default Inputs;
