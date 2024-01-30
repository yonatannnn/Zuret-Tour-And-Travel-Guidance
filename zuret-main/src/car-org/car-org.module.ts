import { Module } from '@nestjs/common';
import { CarOrgController } from './car-org.controller';
import { CarOrgService } from './car-org.service';
import { MongooseModule } from '@nestjs/mongoose';
import { carOrgSchema } from './car-org.model';

@Module({
  imports : [MongooseModule.forFeature([{name : 'carOrg' , schema : carOrgSchema}])],
  controllers: [CarOrgController],
  providers: [CarOrgService]
})
export class CarOrgModule {}
