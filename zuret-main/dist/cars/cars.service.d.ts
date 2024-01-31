import { Model } from 'mongoose';
import { Car } from './Car.Model';
export declare class CarsService {
    private readonly carModel;
    constructor(carModel: Model<Car>);
    addCar(companyId: string, carBrand: string, carImagePath: string, carPrice: number): Promise<string>;
    getOneCar(id: string): Promise<Car>;
    getAllCars(): Promise<(Car & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updatePrice(id: string, price: number): Promise<Car>;
    deleteCar(id: string): Promise<void>;
    private findProduct;
}
