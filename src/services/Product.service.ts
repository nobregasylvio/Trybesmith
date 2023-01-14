import Product from '../interfaces/product.interface';
import ProductModel from '../models/Product.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}