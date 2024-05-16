import Product from 'src/factory/Product';

export default class FashionProduct implements Product {
  name: string;
  category: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.category = 'fashion';
    this.price = price;
    this.stock = stock;
  }

  getDetails(): string {
    return 'Fashion product details';
  }
}
