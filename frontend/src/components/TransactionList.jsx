import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, fetchTransactions, setEditData }) => {
  return (
    <div className="space-y-2 ">
      {transactions.map((tx) => (
        <TransactionItem key={tx._id} transaction={tx} fetchTransactions={fetchTransactions} setEditData={setEditData} />
      ))}
    </div>
  );
};

export default TransactionList;
