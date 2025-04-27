import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MonthlyExpensesChart = ({ transactions }) => {
  const data = transactions.reduce((acc, tx) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short' });
    const found = acc.find((item) => item.month === month);
    if (found) {
      found.amount += tx.amount;
    } else {
      acc.push({ month, amount: tx.amount });
    }
    return acc;
  }, []);

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyExpensesChart;
