import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import path from 'path';


@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService : RoomsService){}
@Post()
async addrooms(
    @Body('companyId') roomCompanyId : string,
    @Body('roomType') roomType: string,
    @Body('imagePath') roomImagePath: string,
    @Body('price') roomPrice: number,
    @Body('rented') roomRented : boolean
){
    const generated_path = await this.roomsService.addRoom(roomCompanyId , roomType, roomImagePath, roomPrice);
    return { message: 'room added successfully', path: generated_path  , "companyId is" : roomCompanyId};
}


    @Get(':id')
    async getRoomById(@Param('id') roomId : string){
        const result = this.roomsService.getOneRoom(roomId);
        return result;

    }

    @Get()
    async getAllRooms(){
        const roomsArray = this.roomsService.getAllRooms();
        return roomsArray;
    }

    @Delete(':id')
    async deleteRoom(@Param('id') roomId : string){
        await this.roomsService.deleteRoom(roomId);
        return null;
    }

    @Patch(':id/:roomPrice')
    async updatePrice(@Param('id') id: string, @Param('roomPrice') roomPrice: number) {
    await this.roomsService.updatePrice(id, roomPrice);
    return this.getRoomById(id);
}

}