import { HotelService } from './hotel.service';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';


@Controller('hotels')
export class HotelController {
    constructor(private readonly hotelService : HotelService){}
    @Post()
    async addHotel(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('imagePath') imagePath: string,
    @Body('starStat') starStat: number,
  ) {
        const generatedId = await this.hotelService.addHotel(name , location , imagePath, starStat);
        return { id : generatedId, message:"Hotel successfully added" };
  }

  @Get()
  async getAllhotel() {
    const hotels = await this.hotelService.getHotels();
    return hotels;
  }

  @Get(':id')
  getHotel(@Param('id') roId: string) {
    return this.hotelService.getSingleHotel(roId);
  }

  @Patch(':id')
  async updateHotel(
    @Param('id') hotelId: string,
    @Body('name') hotelName: string,
    @Body('location') hotelLocation: string,
    @Body('rooms') hotelRooms : object,
    @Body('review') hotelReview : object,
    @Body('starStat') starStat: number,
    @Body('imagePath') hotelImagePath : string,
  ) {
    await this.hotelService.updateHotel(hotelId , hotelName , hotelLocation , hotelRooms, hotelReview , hotelImagePath, starStat);
    return this.getHotel(hotelId);
  }

  @Delete(':id')
    async deleteHotel(@Param('id') hotelId : string){
        await this.hotelService.deleteHotel(hotelId);
        return null;
    }


}
