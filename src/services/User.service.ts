import JWTFunctions from '../auth/JWTFunctions';
import User from '../interfaces/user.interface';
import UserModel from '../models/User.model';

export default class UserService {
  private model: UserModel;

  private jwt: JWTFunctions;

  constructor() {
    this.model = new UserModel();
    this.jwt = new JWTFunctions();
  }

  public create = async (user: User) => {
    const userCreated = await this.model.create(user);
    const token = this.jwt.createToken(userCreated);
    return token;
  };
}