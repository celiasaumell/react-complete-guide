import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";

function DisplayExpenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        expense={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        expense={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        expense={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </div>
  );
}

export default DisplayExpenses;
