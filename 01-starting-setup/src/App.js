import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 1.23,
      date: new Date(2021, 5, 12),
    },
    { 
      id: "e2", 
      title: "Candy", 
      amount: 10, 
      date: new Date(2021, 5, 15) 
    },
    { 
      id: "e3", 
      title: "Cat Food", 
      amount: 20, 
      date: new Date(2021, 5, 1) 
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        expense={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
