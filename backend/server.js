import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5001;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound); // Middleware for handling 404 errors
app.use(errorHandler); // Middleware for handling errors

app.listen(port, () => console.log(`Server is running on port ${port}`));
