import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showExpenseForm, toggleExpenseForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showForm={showExpenseForm} onShowExpenseForm={toggleExpenseForm}></ExpenseForm>}
        </div>
    );
};

export default NewExpense;