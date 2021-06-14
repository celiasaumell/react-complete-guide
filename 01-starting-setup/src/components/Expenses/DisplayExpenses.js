import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function DisplayExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020")
  const filterExpensesHandler = (byYear) => {
    setFilteredYear(byYear);
    console.log(byYear)
  }
  return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler}/>
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
              key={expense.id}
            />
          );
        })}
      </Card>
  );
}

export default DisplayExpenses;
