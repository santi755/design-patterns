import Product from 'src/factory/Product';

export default class ProductFactory {
  private static productTypes = new Map<string, any>();

  static registerProductType(type: string, productClass: any) {
    if (ProductFactory.productTypes.has(type)) {
      throw new Error(`Product category ${type} is already registered`);
    }

    ProductFactory.productTypes.set(type, productClass);
  }

  static createProduct(
    type: string,
    name: string,
    price: number,
    stock: number,
  ): Product {
    const productClass = ProductFactory.productTypes.get(type);

    if (!productClass) {
      throw new Error(`Product category ${type} is not registered`);
    }

    return new productClass(name, price, stock);
  }
}
