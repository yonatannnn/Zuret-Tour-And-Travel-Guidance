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
exports.SeatsController = void 0;
const common_1 = require("@nestjs/common");
const seats_service_1 = require("./seats.service");
let SeatsController = class SeatsController {
    constructor(seatsService) {
        this.seatsService = seatsService;
    }
    async addseats(restaurantId, tableType, seatImagePath, reservationPrice, seatReserved) {
        const generated_path = await this.seatsService.addSeat(restaurantId, tableType, seatImagePath, reservationPrice);
        return { message: 'Car added successfully', path: generated_path, "companyId is": restaurantId };
    }
    async getSeatById(seatId) {
        const result = this.seatsService.getOneSeat(seatId);
        return result;
    }
    async getAllSeats() {
        const seatsArray = this.seatsService.getAllSeats();
        return seatsArray;
    }
    async deleteSeat(seatId) {
        await this.seatsService.deleteSeat(seatId);
        return null;
    }
    async updatePrice(id, reservationPrice) {
        await this.seatsService.updatePrice(id, reservationPrice);
        return this.getSeatById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('companyId')),
    __param(1, (0, common_1.Body)('tableType')),
    __param(2, (0, common_1.Body)('imagePath')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('reserved')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Boolean]),
    __metadata("design:returntype", Promise)
], SeatsController.prototype, "addseats", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeatsController.prototype, "getSeatById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeatsController.prototype, "getAllSeats", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeatsController.prototype, "deleteSeat", null);
__decorate([
    (0, common_1.Patch)(':id/:reservationPrice'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('reservationPrice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], SeatsController.prototype, "updatePrice", null);
SeatsController = __decorate([
    (0, common_1.Controller)('seats'),
    __metadata("design:paramtypes", [seats_service_1.SeatsService])
], SeatsController);
exports.SeatsController = SeatsController;
//# sourceMappingURL=seats.controller.js.map