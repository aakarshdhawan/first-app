import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div>
            {
            props.expenses.map(item => (
                <ExpenseItem title={item.title} amount={item.amount} date={item.date} curr={item.currency}></ExpenseItem>
            ))}
        </div>
    );
}

export default Expenses;