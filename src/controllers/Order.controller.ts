import { Request, Response } from 'express';
import OrderService from '../services/Order.service';

export default class OrderController {
  constructor(private orderSerice = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.orderSerice.getAll();

    res.status(200).json(result);
  };
}