import Product from 'src/factory/Product';

export default class StationaryProduct implements Product {
  name: string;
  category: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.category = 'stationary';
    this.price = price;
    this.stock = stock;
  }

  getDetails(): string {
    return 'Stationary product details';
  }
}
