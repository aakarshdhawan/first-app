import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.62, date: new Date(2021, 4, 2), currency: "$" },
    { id: 'e2', title: 'Big Bazaar', amount: 76, date: new Date(2017, 2, 2), currency: "$" },
    { id: 'e3', title: 'Recharge', amount: 209, date: new Date(2019, 1, 12), currency: "$" },
    { id: 'e4', title: 'Boxing class', amount: 145, date: new Date(2018, 4, 2), currency: "$" }
  ];
  const addExpenseHandler = (expense) => {
    console.log('in App.js', expense);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;