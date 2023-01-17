import Product from '../interfaces/product.interface';
import ProductModel from '../models/Product.model';
import { validateProduct } from './validations/validationsInputValues';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public create(product: Product): Promise<Product> {
    validateProduct(product);
    return this.model.create(product);
  }
}