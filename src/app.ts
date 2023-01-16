import express from 'express';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);

app.use(httpErrorMiddleware);
export default app;
