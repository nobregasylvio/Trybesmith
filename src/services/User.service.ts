import JWTFunctions from '../auth/JWTFunctions';
import User from '../interfaces/user.interface';
import UserModel from '../models/User.model';
import Login from '../interfaces/login.interface';
import HttpException from '../shared/http.exception';
import { validateLogin, validateUser } from './validations/validationsInputValues';

export default class UserService {
  private model: UserModel;

  private jwt: JWTFunctions;

  constructor() {
    this.model = new UserModel();
    this.jwt = new JWTFunctions();
  }

  public create = async (user: User) => {
    validateUser(user);
    const userCreated = await this.model.create(user);
    const token = this.jwt.createToken(userCreated);
    return token;
  };

  public login = async (login: Login) => {
    validateLogin(login);
    const user = await this.model.getByEmail(login.username);
    if (!user || login.password !== user.password) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const token = this.jwt.createToken(user);
    return token;
  };
}