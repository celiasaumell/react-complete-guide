import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desc">
        <h2>{props.expense}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
