import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private service = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.create(user);
    res.status(201).json({ token });
  };
}