import { Module } from '@nestjs/common';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import mongoose from 'mongoose';
import { SeatSchema } from './Seat.Model';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name : 'Seat' , schema: SeatSchema}]),],
  controllers: [SeatsController],
  providers: [SeatsService]
})
export class SeatsModule {}
