import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';
import { CreateBookDto } from './dto/create-booking.dto';
import { UpdateBookDto } from './dto/update-booking.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('appointments')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.findAll()
  }

  @Get(':id')
  async getBooking(@Param('id') id: string): Promise<Booking> {
    return this.bookingService.findById(id);
  }

  @Post()
  // @UseGuards(AuthGuard())
  async createBooking(
    @Body() 
    booking: CreateBookDto ): Promise<Booking> {
    return this.bookingService.create(booking)
  }

  @Put(':id')
  async updateBooking(
    @Param('id') 
    id: string,
    booking: UpdateBookDto ): Promise<Booking> {
    return this.bookingService.updateById(id,booking)
  }


  @Delete(':id') 
  async deleteBooking(
    @Param('id')
    id: string
  ){
    return this.bookingService.deleteById(id);
  }

}
