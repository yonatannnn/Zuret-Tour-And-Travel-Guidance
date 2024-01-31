import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { UsersModule } from './users/users.module';
import { UserDataController } from './user-data/user-data.controller';
import { UserDataService } from './user-data/user-data.service';
import { UserDataModule } from './user-data/user-data.module';
import { ConfigModule } from '@nestjs/config';
import { HotelsModule } from './hotels/hotels.module';
import { RestaurantModule } from './restaurants/restaurant.module';
import config from './config/mongo.keys'
import { CarOrgModule } from './car-org/car-org.module';
import { CarsModule } from './cars/cars.module';
import { HotelModule } from './hotel/hotel.module';
import { RoomsModule } from './hotel-rooms/rooms.module';
import { SeatsModule } from './restaurantSeat/seats.module';

@Module({
  imports: [UserDataModule,AuthModule, UsersModule,ConfigModule.forRoot(),
    MongooseModule.forRoot(config.mongoURi ),
    UserDataModule, CarOrgModule, CarsModule, HotelModule, RoomsModule, RestaurantModule,SeatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
