import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { hotelSchema } from './hotel.model';

@Module({
  imports : [MongooseModule.forFeature([{name : 'hotel' , schema : hotelSchema}])],
  controllers: [HotelController],
  providers: [HotelService]
})
export class HotelModule {}
