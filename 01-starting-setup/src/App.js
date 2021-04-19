import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
    <div><NewExpense />
      <DisplayExpenses expenses={expenses} />
      
    </div>
  );
}

export default App;
