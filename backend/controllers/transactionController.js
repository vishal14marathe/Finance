import Transaction from '../models/Transaction.js';

// Get all transactions
export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
};

// Add transaction
export const addTransaction = async (req, res) => {
  const { amount, date, description } = req.body;
  const transaction = new Transaction({ amount, date, description });
  await transaction.save();
  res.json(transaction);
};

// Update transaction
export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, date, description } = req.body;
  const transaction = await Transaction.findByIdAndUpdate(id, { amount, date, description }, { new: true });
  res.json(transaction);
};

// Delete transaction
export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ message: 'Transaction deleted' });
};
