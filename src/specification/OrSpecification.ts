import Product from './Product';
import Specification from './Specification';

export default class OrSpecification implements Specification<Product> {
  constructor(private specs: Specification<Product>[]) {}

  isSatisfiedBy(item: Product): boolean {
    return this.specs.some((spec) => spec.isSatisfiedBy(item));
  }
}
