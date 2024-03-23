import Product from './Product';
import Specification from './Specification';

export default class HasStockSpecification implements Specification<Product> {
  constructor(private min: number) {}

  isSatisfiedBy(item: Product): boolean {
    return item.stock >= this.min;
  }
}
