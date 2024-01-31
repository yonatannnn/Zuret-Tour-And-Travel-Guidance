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
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RestaurantService = class RestaurantService {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
    }
    async addRestaurant(name, location, imagePath, imagePath1) {
        const newRestaurant = new this.restaurantModel({
            name: name,
            location: location,
            imagePath: imagePath,
            imagePath1: imagePath1,
            review: [],
            seats: [],
            average_price: 0
        });
        const result = await newRestaurant.save();
        console.log(result);
        return result._id;
    }
    async getRestaurants() {
        const restaurants = await this.restaurantModel.find().exec();
        return restaurants.map(co => ({
            id: co._id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            seats: co.seats,
            review: co.review,
            imagePath: co.imagePath,
            imagePath1: co.imagePath1,
        }));
    }
    async getSingleRestaurant(orgId) {
        const co = await this.findRestaurant(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            seats: co.seats,
            review: co.review,
            imagePath: co.imagePath,
            imagePath1: co.imagePath1
        };
    }
    async updateRestaurant(id, name, location, seats, review, imagePath, imagePath1) {
        try {
            const updatedRestaurant = await this.findRestaurant(id);
            if (name) {
                updatedRestaurant.name = name;
            }
            if (location) {
                updatedRestaurant.location = location;
            }
            if (seats) {
                updatedRestaurant.seats = seats;
            }
            if (review) {
                updatedRestaurant.review = review;
            }
            if (imagePath) {
                updatedRestaurant.imagePath = imagePath;
            }
            if (imagePath1) {
                updatedRestaurant.imagePath1 = imagePath1;
            }
            await updatedRestaurant.save();
            return updatedRestaurant;
        }
        catch (error) {
            console.error('Error updating CarOrg:', error);
            throw new Error('Error updating CarOrg');
        }
    }
    async deleteRestaurant(id) {
        try {
            const result = await this.restaurantModel.deleteOne({ _id: id }).exec();
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
    async findRestaurant(id) {
        let org;
        try {
            org = await this.restaurantModel.findById(id).exec();
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
RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('restaurant')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RestaurantService);
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant.service.js.map