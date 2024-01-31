import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    addcars(carCompanyId: string, carBrand: string, carImagePath: string, carPrice: number, carRented: boolean): Promise<{
        message: string;
        path: string;
        "companyId is": string;
    }>;
    getCarById(carId: string): Promise<import("./Car.Model").Car>;
    getAllCars(): Promise<(import("./Car.Model").Car & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteCar(carId: string): Promise<any>;
    updatePrice(id: string, carPrice: number): Promise<import("./Car.Model").Car>;
}
