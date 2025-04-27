import { deleteTransaction } from '../services/api';

const TransactionItem = ({ transaction, fetchTransactions, setEditData }) => {
  const handleDelete = async () => {
    await deleteTransaction(transaction._id);
    fetchTransactions();
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
      <div>
        <div className="font-bold">₹{transaction.amount}</div>
        <div className="text-xs font-bold">{new Date(transaction.date).toLocaleDateString()}</div>
        <div className="text-sm font-bold ">{transaction.description}</div>
      </div>
      <div className="space-x-2">
        <button onClick={() => setEditData(transaction)} className="text-blue-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TransactionItem;
