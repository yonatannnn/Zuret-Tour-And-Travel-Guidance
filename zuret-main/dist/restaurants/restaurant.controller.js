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
exports.RestaurantController = void 0;
const restaurant_service_1 = require("./restaurant.service");
const common_1 = require("@nestjs/common");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async addRestaurant(name, location, imagePath) {
        const generatedId = await this.restaurantService.addRestaurant(name, location, imagePath);
        return { id: generatedId };
    }
    async getAllrestaurant() {
        const restaurants = await this.restaurantService.getRestaurants();
        return restaurants;
    }
    getRestaurant(orgId) {
        return this.restaurantService.getSingleRestaurant(orgId);
    }
    async updateRestaurant(orgId, orgName, orgLocation, orgSeats, orgReview, orgImagePath) {
        await this.restaurantService.updateRestaurant(orgId, orgName, orgLocation, orgSeats, orgReview, orgImagePath);
        return this.getRestaurant(orgId);
    }
    async deleteRestaurant(restaurantId) {
        await this.restaurantService.deleteRestaurant(restaurantId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('location')),
    __param(2, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "addRestaurant", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getAllrestaurant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RestaurantController.prototype, "getRestaurant", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('location')),
    __param(3, (0, common_1.Body)('seats')),
    __param(4, (0, common_1.Body)('review')),
    __param(5, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object, String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "deleteRestaurant", null);
RestaurantController = __decorate([
    (0, common_1.Controller)('restaurants'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
exports.RestaurantController = RestaurantController;
//# sourceMappingURL=restaurant.controller.js.map