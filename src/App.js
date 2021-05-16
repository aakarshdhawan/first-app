import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  { id: 'e1', title: 'Car Insurance', amount: 294.62, date: new Date(2021, 4, 2), currency: "$" },
  { id: 'e2', title: 'Big Bazaar', amount: 76, date: new Date(2017, 2, 2), currency: "$" },
  { id: 'e3', title: 'Recharge', amount: 2090, date: new Date(2019, 1, 12), currency: "$" },
  { id: 'e1', title: 'Get a puppy', amount: 12000, date: new Date(2019, 4, 22), currency: "₹" },
  { id: 'e4', title: 'Boxing class', amount: 3000, date: new Date(2020, 4, 2), currency: "₹" },
];
const App = () => {
  const [expenses, updateExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    updateExpenses((prevState) => {
      return [
        expense,
        ...prevState
      ]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;