import express from 'express';
import connectDB from './config/db.js';
import transactionRoutes from './routes/transactionRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', transactionRoutes);

// Connect DB and start server
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
