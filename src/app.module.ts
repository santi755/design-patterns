import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { SpecificationController } from './specification/Specification.controller';
import { FactoryController } from './factory/Factory.controller';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SpecificationController, FactoryController],
  providers: [AppService],
})
export class AppModule {}
