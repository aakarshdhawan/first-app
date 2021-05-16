import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredValue, setEnteredValue] = useState({
        title: '',
        amount: '',
        date: '',
        currency: '$'
    });
    const inputChangeHandler = (event) => {
        switch (event.target.type) {
            case "text":
                // input is string
                setEnteredValue((prevState) => {
                    return { ...prevState, title: event.target.value };
                });
                break;
            case "number":
                // input is number
                setEnteredValue((prevState) => {
                    return { ...prevState, amount: event.target.value };
                });
                break;
            case "date":
                // input is date
                setEnteredValue((prevState) => {
                    return { ...prevState, date: event.target.value };
                });
                break;
            default:
                break;
        }
    };
    const submitHandler = (event) => {
        debugger;
        event.preventDefault();
        const expenseData = {
            ...enteredValue,
            date: new Date(enteredValue.date)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredValue({
            title: '',
            amount: '',
            date: ''
        });
        props.onShowExpenseForm((prevState) => {
            return false;
        });
    };
    const resetHandler = () => {
        setEnteredValue({
            title: '',
            amount: '',
            date: ''
        });
        props.onShowExpenseForm((prevState) => {
            return false;
        });
    };
    const showExpenseFormFunc = () => {
        props.onShowExpenseForm((prevState) => {
            return true;
        });
    };
    if (props.showForm) {
        return (
            <form onSubmit={submitHandler} onReset={resetHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__controls">
                        <label>Title</label>
                        <input type='text' onChange={inputChangeHandler} value={enteredValue.title}></input>
                    </div>
                    <div className="new-expense__controls">
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" onChange={inputChangeHandler} value={enteredValue.amount}></input>
                    </div>
                    <div className="new-expense__controls">
                        <label>Date</label>
                        <input type='date' min='2016-01-01' max='2022-12-31' onChange={inputChangeHandler} value={enteredValue.date}></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='reset'>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        )
    }
    return <div>
        <button type='button' onClick={showExpenseFormFunc}>Add Expense</button>
    </div>;
};

export default ExpenseForm;