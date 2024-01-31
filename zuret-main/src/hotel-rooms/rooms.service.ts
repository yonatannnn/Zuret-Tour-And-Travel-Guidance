// cars/services/cars.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './Room.Model';
import { localRooms } from './room';

@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async addRoom( companyId:string , roomType: string , roomImagePath : string , roomPrice: number){
    const newRoom = new this.roomModel({
        companyId : companyId,
        roomType: roomType,
        imagePath: roomImagePath,
        price: roomPrice,
        rented: false
    });
    const result = await newRoom.save();
    console.log(localRooms)
    return result.companyId;
  }

  async getOneRoom(id: string){
    const result = await this.findProduct(id);
    return result.companyId;
  }
  
  async getAllRooms(){
    const cars = await this.roomModel.find().exec();
    return cars;
  }

  async updatePrice(id: string, price: number) {
    try {
        const room = await this.findProduct(id);

        if (room) {
            room.price = price;
            await room.save();
            console.log(`Price for car with ID ${id} updated successfully.`);
            return room;
        } else {
            console.log(`Car with ID ${id} not found.`);
            return null;
        }
    } catch (error) {
        console.error(`Error updating price for car with ID ${id}:`, error);
        throw error;
    }
}


  async deleteRoom(id: string) {
    try {
        const result = await this.roomModel.deleteOne({ _id: id }).exec();

        if (result.deletedCount === 1) {
            console.log(`Car with ID ${id} deleted successfully.`);
        } else {
            console.log(`Car with ID ${id} not found.`);
        }
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, error);
    }
}

  private async findProduct(id: string): Promise<Room> {
    let room;
    try {
      room = await this.roomModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product. ');
    }
    if (!room) {
      throw new NotFoundException('Could not find product.');
    }
    return room;
  }
}
