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
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let RestaurantsService = class RestaurantsService {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
    }
    async getRestauranta(filterDto) {
        let options = {};
        const { restaurants } = filterDto;
        console.log(restaurants);
        if (restaurants) {
            options = {
                restaurants: restaurants
            };
        }
        return await this.restaurantModel.find(options);
    }
    async getOne(id) {
        return await this.restaurantModel.findOne({ _id: id });
    }
    async create(restaurant, path) {
        const newRestaurant = new this.restaurantModel(restaurant);
        console.log(newRestaurant);
        newRestaurant.picturePath = path;
        return await newRestaurant.save();
    }
    async delete(id) {
        return await this.restaurantModel.findByIdAndDelete(id);
    }
    async update(id, restaurant) {
        return await this.restaurantModel.findByIdAndUpdate(id, restaurant, { new: true });
    }
    async deleteAll() {
        return await this.restaurantModel.deleteMany({});
    }
};
RestaurantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Restaurant')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map