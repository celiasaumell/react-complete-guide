import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found no expenses for the selected year.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
