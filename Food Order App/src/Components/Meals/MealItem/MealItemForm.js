import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setInputIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);

  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!inputIsValid && (
          <p>The amount entered is invalid. Please enter a number 1-5.</p>
        )}
      </form>
    </>
  );
};

export default MealItemForm;
