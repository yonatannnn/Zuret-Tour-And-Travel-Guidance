import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import { Booking } from './schemas/booking.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private bookingModel: mongoose.Model<Booking>
  ) {}

  async findAll(): Promise<Booking[]> {
    const bookings = await this.bookingModel.find();
    return bookings
  }

  async create(booking: Booking): Promise<Booking> {
    const res = await this.bookingModel.create(booking);
    return res
  }

  async findById(id: string) : Promise<Booking>{
    const ress = await this.bookingModel.findById(id)

    if (!ress) {
      throw new NotFoundException('Booking not found');
    }

    return ress;
  }

  async updateById(id: string, booking: Booking) : Promise<Booking>{
   return await this.bookingModel.findByIdAndUpdate(id, booking, {
    new: true,
    runValidators:true,
   })

  }

  async deleteById(id: string) : Promise<Booking>{
    return await this.bookingModel.findByIdAndDelete(id)
 
   }


}
