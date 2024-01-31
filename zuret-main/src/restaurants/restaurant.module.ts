import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { restaurantSchema } from './restaurant.model';

@Module({
  imports : [MongooseModule.forFeature([{name : 'restaurant' , schema : restaurantSchema}])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
