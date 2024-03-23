import { Controller, Get, Query } from '@nestjs/common';
import Product from './Product';
import CategorySpecification from './CategorySpecification';
import PriceRangeSpecification from './PriceRangeSpecification';
import HasStockSpecification from './HasStockSpecification';
import AndSpecification from './AndSpecification';
import NameContainsSpecification from './NameContainsSpecification';
import OrSpecification from './OrSpecification';

@Controller()
export class SpecificationController {
  constructor() {}

  /**
   * Example 1:
   *  URL: localhost:3000/specification?name=laptop&category=electronic&stock=4&minPrice=200&maxPrice=600
   */

  // Get all products filtered by multiple query parameters
  @Get('/specification')
  getFilteredProducts(@Query() query: any) {
    const products = this.createMultipleProducts();

    const NameContainsSpec = new NameContainsSpecification(query.name);
    const categorySpec = new CategorySpecification(query.category);
    const priceRangeSpec = new PriceRangeSpecification(
      query.minPrice,
      query.maxPrice,
    );
    const hasStockSpec = new HasStockSpecification(query.stock);
    /*
    const AndSpec = new AndSpecification([
      NameContainsSpec,
      categorySpec,
      priceRangeSpec,
      hasStockSpec,
    ]);
    */

    const OrSpec = new OrSpecification([
      NameContainsSpec,
      categorySpec,
      priceRangeSpec,
      hasStockSpec,
    ]);

    const filteredProducts = products.filter((product) =>
      //AndSpec.isSatisfiedBy(product),
      OrSpec.isSatisfiedBy(product),
    );

    return filteredProducts;
  }

  private createMultipleProducts() {
    const product1 = new Product('laptop', 'electronic', 500, 4);
    const product2 = new Product('phone', 'electronic', 300, 5);
    const product3 = new Product('book', 'stationary', 20, 10);
    const product4 = new Product('bag', 'fashion', 100, 3);
    const product5 = new Product('shoes', 'fashion', 150, 2);
    const product6 = new Product('headphones', 'electronic', 100, 7);
    const product7 = new Product('watch', 'fashion', 200, 8);
    const product8 = new Product('pen', 'stationary', 5, 15);
    const product9 = new Product('keyboard', 'electronic', 50, 6);
    const product10 = new Product('mouse', 'electronic', 30, 9);

    const products = [
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
      product7,
      product8,
      product9,
      product10,
    ];

    return products;
  }
}
