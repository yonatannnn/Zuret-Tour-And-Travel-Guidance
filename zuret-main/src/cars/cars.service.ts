// cars/services/cars.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './Car.Model';
import { localCars } from './car';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}

  async addCar( companyId:string , carBrand: string , carImagePath : string , carPrice: number){
    const newCar = new this.carModel({
        companyId : companyId,
        brand: carBrand,
        imagePath: carImagePath,
        price: carPrice,
        rented: false
    });
    const result = await newCar.save();
    console.log(localCars)
    return result.companyId;
  }

  async getOneCar(id: string){
    const result = await this.findProduct(id);
    return result;
  }
  
  async getAllCars(){
    const cars = await this.carModel.find().exec();
    return cars;
  }

  async updatePrice(id: string, price: number) {
    try {
        const car = await this.findProduct(id);

        if (car) {
            car.price = price;
            await car.save();
            console.log(`Price for car with ID ${id} updated successfully.`);
            return car;
        } else {
            console.log(`Car with ID ${id} not found.`);
            return null;
        }
    } catch (error) {
        console.error(`Error updating price for car with ID ${id}:`, error);
        throw error;
    }
}


  async deleteCar(id: string) {
    try {
        const result = await this.carModel.deleteOne({ _id: id }).exec();

        if (result.deletedCount === 1) {
            console.log(`Car with ID ${id} deleted successfully.`);
        } else {
            console.log(`Car with ID ${id} not found.`);
        }
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, error);
    }
}

  private async findProduct(id: string): Promise<Car> {
    let car;
    try {
      car = await this.carModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product. ');
    }
    if (!car) {
      throw new NotFoundException('Could not find product.');
    }
    return car;
  }
}
