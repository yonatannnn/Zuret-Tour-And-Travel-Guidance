// cars/services/cars.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seat } from './Seat.Model';
import { localSeats } from './seat';

@Injectable()
export class SeatsService {
  constructor(@InjectModel('Seat') private readonly seatModel: Model<Seat>) {}

  async addSeat( companyId:string , tableType: string , seatImagePath : string, reservationPrice: number){
    const newSeat = new this.seatModel({
        companyId : companyId,
        tableType: tableType,
        imagePath: seatImagePath,
        
        price: reservationPrice,
        reserved: false
    });
    const result = await newSeat.save();
    console.log(localSeats)
    return result;
  }

  async getOneSeat(id: string){
    const result = await this.findProduct(id);
    return result;
  }
  
  async getAllSeats(){
    const seats = await this.seatModel.find().exec();
    return seats;
  }

  async updatePrice(id: string, price: number) {
    try {
        const seat = await this.findProduct(id);

        if (seat) {
            seat.price = price;
            await seat.save();
            console.log(`Price for car with ID ${id} updated successfully.`);
            return seat;
        } else {
            console.log(`Car with ID ${id} not found.`);
            return null;
        }
    } catch (error) {
        console.error(`Error updating price for car with ID ${id}:`, error);
        throw error;
    }
}


  async deleteSeat(id: string) {
    try {
        const result = await this.seatModel.deleteOne({ _id: id }).exec();

        if (result.deletedCount === 1) {
            console.log(`Car with ID ${id} deleted successfully.`);
        } else {
            console.log(`Car with ID ${id} not found.`);
        }
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, error);
    }
}

  private async findProduct(id: string): Promise<Seat> {
    let seat;
    try {
      seat = await this.seatModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product. ');
    }
    if (!seat) {
      throw new NotFoundException('Could not find product.');
    }
    return seat;
  }
}
