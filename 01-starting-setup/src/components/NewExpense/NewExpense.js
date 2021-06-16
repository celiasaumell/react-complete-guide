import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [displayForm, setDisplayForm] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayFormHandler = () => {
    setDisplayForm(true);
  };

  const hideFormHandler = () => {
    setDisplayForm(false);
  }

  const form = <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} hideForm={hideFormHandler} />;
  const btnToDisplayForm = (
    <button type="button" onClick={displayFormHandler}>
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">{displayForm ? form : btnToDisplayForm}</div>
  );
}

export default NewExpense;
