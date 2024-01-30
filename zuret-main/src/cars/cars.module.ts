import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import mongoose from 'mongoose';
import { CarSchema } from './Car.Model';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name : 'Car' , schema: CarSchema}]),],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
