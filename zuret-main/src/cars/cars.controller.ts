import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import path from 'path';


@Controller('cars')
export class CarsController {
    constructor(private readonly carsService : CarsService){}
@Post()
async addcars(
    @Body('companyId') carCompanyId : string,
    @Body('brand') carBrand: string,
    @Body('imagePath') carImagePath: string,
    @Body('price') carPrice: number,
    @Body('rented') carRented : boolean
){
    const generated_path = await this.carsService.addCar(carCompanyId , carBrand, carImagePath, carPrice);
    return { message: 'Car added successfully', path: generated_path  , "companyId is" : carCompanyId};
}


    @Get(':id')
    async getCarById(@Param('id') carId : string){
        const result = this.carsService.getOneCar(carId);
        return result;

    }

    @Get()
    async getAllCars(){
        const carsArray = this.carsService.getAllCars();
        return carsArray;
    }

    @Delete(':id')
    async deleteCar(@Param('id') carId : string){
        await this.carsService.deleteCar(carId);
        return null;
    }

    @Patch(':id/:carPrice')
    async updatePrice(@Param('id') id: string, @Param('carPrice') carPrice: number) {
    await this.carsService.updatePrice(id, carPrice);
    return this.getCarById(id);
}

}