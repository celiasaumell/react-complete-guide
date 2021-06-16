import React, { useState } from "react";

import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function DisplayExpenses(props) {
  //manages a filter state called a stateful component

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpensesHandler = (byYear) => {
    setFilteredYear(byYear);
  };

  const result = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

 
  return (
    <Card className="expenses">
      {/* The Expense Filter is a controlled component. The values are handled in a parent component. */}

      <ExpensesFilter
        selected={filteredYear}
        onFilterExpenses={filterExpensesHandler}
      />
      <ExpensesChart items={result}/>
      <ExpensesList items={result}/>

    </Card>
  );
}

export default DisplayExpenses;
