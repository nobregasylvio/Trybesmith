import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { id: insertId, ...user };
  }

  public async getByEmail(username: string): Promise<User | undefined> {
    const [rows] = await this.connection.execute<RowDataPacket[] & User[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    return rows[0];
  }
}