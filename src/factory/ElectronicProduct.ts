import Product from 'src/factory/Product';

export default class ElectronicProduct implements Product {
  name: string;
  category: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.category = 'electronic';
    this.price = price;
    this.stock = stock;
  }

  getDetails(): string {
    return 'Electronic product details';
  }
}
