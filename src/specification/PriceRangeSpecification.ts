import Specification from './Specification';
import Product from './Product';

export default class PriceRangeSpecification implements Specification<Product> {
  constructor(
    private min: number,
    private max: number,
  ) {}

  isStatisfiedBy(item: Product): boolean {
    return item.price >= this.min && item.price <= this.max;
  }
}
