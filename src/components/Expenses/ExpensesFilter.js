import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const selectChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">Filter by year</label>
                <select name="selectYear" onChange={selectChangeHandler} value={props.selectedYear}>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;