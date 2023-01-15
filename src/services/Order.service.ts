import Order from '../interfaces/order.interface';
import OrderModel from '../models/Order.model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }
}