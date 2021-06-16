import React, { useState } from "react";

import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function DisplayExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpensesHandler = (byYear) => {
    setFilteredYear(byYear);
  };
  const result = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

 
  return (
    <Card className="expenses">
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
