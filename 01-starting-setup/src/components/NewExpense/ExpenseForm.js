import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const newExpenseControl = [
    {
      label: "Title",
      key: "title",
      value: enteredTitle,
      handler: titleChangeHandler,
      attributes: { type: "text" },
    },
    {
      label: "Amount",
      key: "amount",
      value: enteredAmount,
      handler: amountChangeHandler,
      attributes: { type: "number", min: "0.01", step: "0.01" },
    },
    {
      label: "Date",
      key: "date",
      handler: dateChangeHandler,
      value: enteredDate,
      attributes: { type: "date", min: "2019-01-01", max: "2022-12-31" },
    },
  ];
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        {newExpenseControl.map((control) => {
          return (
            <div className="new-expense__control" key={control.key}>
              <label>{control.label}</label>
              <input
                {...control.attributes}
                value={control.value}
                onChange={control.handler}
              />
            </div>
          );
        })}
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.hideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
