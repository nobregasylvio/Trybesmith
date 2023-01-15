import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import connection from './connection';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
      WHERE o.id = p.order_id GROUP BY o.id`,
    );
    return rows;
  }
}