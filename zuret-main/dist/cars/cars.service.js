"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const car_1 = require("./car");
let CarsService = class CarsService {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async addCar(companyId, carBrand, carImagePath, carPrice) {
        const newCar = new this.carModel({
            companyId: companyId,
            brand: carBrand,
            imagePath: carImagePath,
            price: carPrice,
            rented: false
        });
        const result = await newCar.save();
        console.log(car_1.localCars);
        return result.companyId;
    }
    async getOneCar(id) {
        const result = await this.findProduct(id);
        return result;
    }
    async getAllCars() {
        const cars = await this.carModel.find().exec();
        return cars;
    }
    async updatePrice(id, price) {
        try {
            const car = await this.findProduct(id);
            if (car) {
                car.price = price;
                await car.save();
                console.log(`Price for car with ID ${id} updated successfully.`);
                return car;
            }
            else {
                console.log(`Car with ID ${id} not found.`);
                return null;
            }
        }
        catch (error) {
            console.error(`Error updating price for car with ID ${id}:`, error);
            throw error;
        }
    }
    async deleteCar(id) {
        try {
            const result = await this.carModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            }
            else {
                console.log(`Car with ID ${id} not found.`);
            }
        }
        catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }
    async findProduct(id) {
        let car;
        try {
            car = await this.carModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product. ');
        }
        if (!car) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return car;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Car')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map