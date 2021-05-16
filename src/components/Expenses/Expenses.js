import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredExpenses, filterExpenses] = useState(props.expenses.filter(t => t.date.getFullYear() == '2020'));

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
        filterExpenses((prevState) => {
            return props.expenses.filter(t => t.date.getFullYear() == year);
        })
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={filteredYear}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;