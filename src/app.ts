import express from 'express';
import productRoutes from './routes/product.routes';

// Commit Inicial

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

export default app;
