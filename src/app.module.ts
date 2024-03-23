import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { SpecificationController } from './specification/Specification.controller';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SpecificationController],
  providers: [AppService],
})
export class AppModule {}
