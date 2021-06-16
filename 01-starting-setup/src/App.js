import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 1.23,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e2",
    title: "Candy",
    amount: 10,
    date: new Date(2021, 5, 15),
  },
  {
    id: "e3",
    title: "Cat Food",
    amount: 20,
    date: new Date(2019, 5, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default App;
