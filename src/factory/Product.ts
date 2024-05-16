export default interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;

  getDetails(): string;
}
