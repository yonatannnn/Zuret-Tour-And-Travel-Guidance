import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SeatsService } from './seats.service';
import path from 'path';


@Controller('seats')
export class SeatsController {
    constructor(private readonly seatsService : SeatsService){}
@Post()
async addseats(
    @Body('companyId') restaurantId : string,
    @Body('tableType') tableType: string,
    @Body('imagePath') seatImagePath: string,
    @Body('price') reservationPrice: number,
    @Body('reserved') seatReserved : boolean
){
    const generated_path = await this.seatsService.addSeat(restaurantId , tableType, seatImagePath, reservationPrice);
    return { message: 'Car added successfully', path: generated_path  , "companyId is" : restaurantId};
}


    @Get(':id')
    async getSeatById(@Param('id') seatId : string){
        const result = this.seatsService.getOneSeat(seatId);
        return result;

    }

    @Get()
    async getAllSeats(){
        const seatsArray = this.seatsService.getAllSeats();
        return seatsArray;
    }

    @Delete(':id')
    async deleteSeat(@Param('id') seatId : string){
        await this.seatsService.deleteSeat(seatId);
        return null;
    }

    @Patch(':id/:reservationPrice')
    async updatePrice(@Param('id') id: string, @Param('reservationPrice') reservationPrice: number) {
    await this.seatsService.updatePrice(id, reservationPrice);
    return this.getSeatById(id);
}

}