import Product from './Product';
import Specification from './Specification';

export default class NameContainsSpecification
  implements Specification<Product>
{
  constructor(private subString: string) {}

  isSatisfiedBy(item: Product): boolean {
    return item.name.includes(this.subString);
  }
}
