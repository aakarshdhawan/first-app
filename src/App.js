import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.62, date: new Date(2021, 4, 2), currency: "$" },
    { title: 'Big Bazaar', amount: 76, date: new Date(2017, 2, 2), currency: "$" },
    { title: 'Recharge', amount: 209, date: new Date(2019, 1, 12), currency: "$" },
    { title: 'Boxing class', amount: 145, date: new Date(2018, 4, 2), currency: "$" }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;