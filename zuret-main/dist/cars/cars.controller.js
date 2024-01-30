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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async addcars(carCompanyId, carBrand, carImagePath, carPrice, carRented) {
        const generated_path = await this.carsService.addCar(carCompanyId, carBrand, carImagePath, carPrice);
        return { message: 'Car added successfully', path: generated_path, "companyId is": carCompanyId };
    }
    async getCarById(carId) {
        const result = this.carsService.getOneCar(carId);
        return result;
    }
    async getAllCars() {
        const carsArray = this.carsService.getAllCars();
        return carsArray;
    }
    async deleteCar(carId) {
        await this.carsService.deleteCar(carId);
        return null;
    }
    async updatePrice(id, carPrice) {
        await this.carsService.updatePrice(id, carPrice);
        return this.getCarById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('companyId')),
    __param(1, (0, common_1.Body)('brand')),
    __param(2, (0, common_1.Body)('imagePath')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('rented')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Boolean]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "addcars", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteCar", null);
__decorate([
    (0, common_1.Patch)(':id/:carPrice'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('carPrice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updatePrice", null);
CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map