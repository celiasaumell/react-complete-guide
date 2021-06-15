import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function DisplayExpenses(props) {
  //manages a filter state called a stateful component
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpensesHandler = (byYear) => {
    setFilteredYear(byYear);
  };
  return (
    <Card className="expenses">
      {/* The Expense Filter is a controlled component. The values are handled in a parent component. */}
      <ExpensesFilter
        selected={filteredYear}
        onFilterExpenses={filterExpensesHandler}
      />
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
