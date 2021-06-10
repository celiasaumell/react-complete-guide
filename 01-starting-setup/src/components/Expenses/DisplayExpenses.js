import ExpenseItem from './ExpenseItem'
import './DisplayExpenses.css'
import Card from '../UI/Card'

function DisplayExpenses (props) {
  return (
    <Card className='expenses'>
      {props.expenses.map(expense => {
        return (
          <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
            key={expense.id}
          />
        )
      })}
    </Card>
  )
}

export default DisplayExpenses
