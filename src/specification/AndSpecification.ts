import Product from './Product';
import Specification from './Specification';

export default class AndSpecification implements Specification<Product> {
  constructor(private specs: Specification<Product>[]) {}

  isSatisfiedBy(item: Product): boolean {
    return this.specs.every((spec) => spec.isSatisfiedBy(item));
  }
}
