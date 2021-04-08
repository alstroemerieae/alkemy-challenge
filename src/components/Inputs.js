import InputConcept from "./InputConcept"
import InputAmount from "./InputAmount"
import InputDate from "./InputDate"
import InputType from "./InputType"
import InputButton from "./InputButton"

const Inputs = () => {
  return (
    <form className="App-input">
      {/* Concept */}
      <InputConcept />
      {/* Amount */}
      <InputAmount />
      {/* Date */}
      <InputDate />
      {/* Type (Income/Expense) */}
      <InputType />
      {/* Add button */}
      <InputButton />
    </form>
  );
}

export default Inputs;
