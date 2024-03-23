import Specification from './Specification';
import Product from './Product';

export default class CategorySpecification implements Specification<Product> {
  constructor(private category: string) {}

  isSatisfiedBy(item: Product): boolean {
    return item.category === this.category;
  }
}
