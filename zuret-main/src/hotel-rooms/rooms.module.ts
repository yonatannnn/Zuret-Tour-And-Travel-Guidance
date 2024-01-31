import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import mongoose from 'mongoose';
import { RoomSchema } from './Room.Model';
import { MongooseModule, Schema } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name : 'Room' , schema: RoomSchema}]),],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
