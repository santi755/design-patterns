import { Controller, Get } from '@nestjs/common';

import ProductFactory from './ProductFactory';
import FashionProduct from './FashionProduct';
import ElectronicProduct from './ElectronicProduct';
import StationaryProduct from './StationaryProduct';

@Controller()
export class FactoryController {
  constructor() {}

  @Get('/factory')
  getFactoryPattern() {
    ProductFactory.registerProductType('fashion', FashionProduct);
    ProductFactory.registerProductType('electronic', ElectronicProduct);
    ProductFactory.registerProductType('stationary', StationaryProduct);

    const fashionProduct = ProductFactory.createProduct(
      'stationary',
      'T-shirt',
      20,
      100,
    );

    return fashionProduct.getDetails();
  }
}
