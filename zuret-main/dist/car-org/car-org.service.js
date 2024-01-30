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
exports.CarOrgService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CarOrgService = class CarOrgService {
    constructor(carOrgModel) {
        this.carOrgModel = carOrgModel;
    }
    async addCarOrg(name, location, imagePath) {
        const newCarOrg = new this.carOrgModel({
            name: name,
            location: location,
            imagePath: imagePath,
            review: [],
            cars: [],
            average_price: 0
        });
        const result = await newCarOrg.save();
        console.log(result);
        return result._id;
    }
    async getCarOrgs() {
        const carOrgs = await this.carOrgModel.find().exec();
        return carOrgs.map(co => ({
            id: co._id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            cars: co.cars,
            review: co.review,
            imagePath: co.imagePath
        }));
    }
    async getSingleCarOrg(orgId) {
        const co = await this.findCarOrg(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            cars: co.cars,
            review: co.review,
            imagePath: co.imagePath
        };
    }
    async updateCarOrg(id, name, location, cars, review, imagePath) {
        try {
            const updatedCarOrg = await this.findCarOrg(id);
            if (name) {
                updatedCarOrg.name = name;
            }
            if (location) {
                updatedCarOrg.location = location;
            }
            if (cars) {
                updatedCarOrg.cars = cars;
            }
            if (review) {
                updatedCarOrg.review = review;
            }
            if (imagePath) {
                updatedCarOrg.imagePath = imagePath;
            }
            await updatedCarOrg.save();
            return updatedCarOrg;
        }
        catch (error) {
            console.error('Error updating CarOrg:', error);
            throw new Error('Error updating CarOrg');
        }
    }
    async deleteCarOrg(id) {
        try {
            const result = await this.carOrgModel.deleteOne({ _id: id }).exec();
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
    async findCarOrg(id) {
        let org;
        try {
            org = await this.carOrgModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find.');
        }
        if (!org) {
            throw new common_1.NotFoundException('Could not find. ');
        }
        return org;
    }
};
CarOrgService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('carOrg')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarOrgService);
exports.CarOrgService = CarOrgService;
//# sourceMappingURL=car-org.service.js.map