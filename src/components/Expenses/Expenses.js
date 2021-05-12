import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };
    return (
        <div>
            <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={filteredYear}></ExpensesFilter>
            <Card className="expenses">
                {
                    props.expenses.map(item => (
                        <ExpenseItem title={item.title} amount={item.amount} date={item.date} curr={item.currency}></ExpenseItem>
                    ))}
            </Card>
        </div>
    );
}

export default Expenses;