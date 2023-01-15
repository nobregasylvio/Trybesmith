import { Secret, sign, SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

export default class JWTFunctions {
  private secret: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.secret = process.env.TOKEN_SECRET || 'mySecret' as Secret;
    
    this.jwtConfig = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };
  }

  public createToken = (user: User) => {
    const userWithoutPassword = { id: user.id, username: user.username };
    return sign({ data: userWithoutPassword }, this.secret as string, this.jwtConfig);
  };
}