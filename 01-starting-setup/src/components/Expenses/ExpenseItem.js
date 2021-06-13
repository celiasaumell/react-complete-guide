import React, { useState } from 'react'

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //function clickHandler() {}
  //React hook useState allows us to define values as states and changing values should reflect in component function being called again
  //use directly in the React component function - not outside or in nested functions
  //updated on a per component basis! (React will create different instances)
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
   setTitle("Updated!"); 
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desc">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card>
  );
}

export default ExpenseItem;
