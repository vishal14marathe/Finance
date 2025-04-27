import { useEffect, useState } from 'react';
import { getTransactions } from './services/api';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyExpensesChart from './components/MonthlyExpensesChart';
// import PieChartComponent from './charts/PieChartComponent';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Personal Finance Dashboard</h1>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Transaction Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
          <TransactionForm fetchTransactions={fetchTransactions} editData={editData} setEditData={setEditData} />
        </div>

        {/* Monthly Expenses Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
          <MonthlyExpensesChart transactions={transactions} />
        </div>

        {/* Pie Chart Component */}
        {/* Uncomment to display the pie chart */}
        {/* <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Transaction Distribution</h2>
          <PieChartComponent />
        </div> */}

        {/* Transaction List */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Transaction List</h2>
          <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} setEditData={setEditData} />
        </div>
      </div>
    </div>
  );
}

export default App;
