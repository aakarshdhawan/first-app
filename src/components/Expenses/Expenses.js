import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.expenses.map(item => (
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date} curr={item.currency}></ExpenseItem>
                ))}
        </Card>
    );
}

export default Expenses;