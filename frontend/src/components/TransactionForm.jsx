import { useState } from 'react';
import { addTransaction, updateTransaction } from '../services/api';
import { useToast } from './ui/use-toast';

const TransactionForm = ({ fetchTransactions, editData, setEditData }) => {
  const { toast } = useToast(); // Destructure toast from useToast hook

  // Initialize form state with editData or empty fields
  const [form, setForm] = useState({
    amount: editData?.amount || '',
    date: editData?.date?.split('T')[0] || '', // Format date to YYYY-MM-DD
    description: editData?.description || '',
  });

  // Handle input changes for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding or updating transactions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!form.amount || !form.date || !form.description) {
      toast({ title: "Please fill all fields", variant: "destructive" }); // Show error toast
      return;
    }

    try {
      if (editData) {
        // Update transaction if editData exists
        await updateTransaction(editData._id, form);
        setEditData(null); // Reset edit data
        toast({ title: "Transaction updated!" }); // Show success toast
      } else {
        // Add new transaction if no editData
        await addTransaction(form);
        toast({ title: "Transaction added!" }); // Show success toast
      }

      fetchTransactions(); // Fetch updated list of transactions
      setForm({ amount: '', date: '', description: '' }); // Reset form fields
    } catch (error) {
      console.error(error);  // Log the error for debugging
      toast({ title: "Something went wrong", variant: "destructive" }); // Show error toast
    }
  };

  return (
    <form className="space-y-4 p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-center">{editData ? 'Edit Transaction' : 'Add Transaction'}</h2>
      
      <div className="space-y-2">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input 
          type="number" 
          name="amount" 
          value={form.amount} 
          onChange={handleChange} 
          placeholder="Amount" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <input 
          type="text" 
          name="description" 
          value={form.description} 
          onChange={handleChange} 
          placeholder="Description" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button 
        type="submit" 
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {editData ? 'Update' : 'Add'} Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
