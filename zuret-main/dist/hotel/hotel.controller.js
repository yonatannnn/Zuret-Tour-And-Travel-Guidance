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
exports.HotelController = void 0;
const hotel_service_1 = require("./hotel.service");
const common_1 = require("@nestjs/common");
let HotelController = class HotelController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    async addHotel(name, location, imagePath, starStat) {
        const generatedId = await this.hotelService.addHotel(name, location, imagePath, starStat);
        return { id: generatedId };
    }
    async getAllhotel() {
        const hotels = await this.hotelService.getHotels();
        return hotels;
    }
    getHotel(roId) {
        return this.hotelService.getSingleHotel(roId);
    }
    async updateHotel(hotelId, hotelName, hotelLocation, hotelRooms, hotelReview, starStat, hotelImagePath) {
        await this.hotelService.updateHotel(hotelId, hotelName, hotelLocation, hotelRooms, hotelReview, hotelImagePath, starStat);
        return this.getHotel(hotelId);
    }
    async deleteHotel(hotelId) {
        await this.hotelService.deleteHotel(hotelId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('location')),
    __param(2, (0, common_1.Body)('imagePath')),
    __param(3, (0, common_1.Body)('starStat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "addHotel", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getAllhotel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "getHotel", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('location')),
    __param(3, (0, common_1.Body)('rooms')),
    __param(4, (0, common_1.Body)('review')),
    __param(5, (0, common_1.Body)('starStat')),
    __param(6, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object, Number, String]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "deleteHotel", null);
HotelController = __decorate([
    (0, common_1.Controller)('hotels'),
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], HotelController);
exports.HotelController = HotelController;
//# sourceMappingURL=hotel.controller.js.map