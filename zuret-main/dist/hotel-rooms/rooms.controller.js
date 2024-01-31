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
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
let RoomsController = class RoomsController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    async addrooms(roomCompanyId, roomType, roomImagePath, roomPrice, roomRented) {
        const generated_path = await this.roomsService.addRoom(roomCompanyId, roomType, roomImagePath, roomPrice);
        return { message: 'room added successfully', path: generated_path, "companyId is": roomCompanyId };
    }
    async getRoomById(roomId) {
        const result = this.roomsService.getOneRoom(roomId);
        return result;
    }
    async getAllRooms() {
        const roomsArray = this.roomsService.getAllRooms();
        return roomsArray;
    }
    async deleteRoom(roomId) {
        await this.roomsService.deleteRoom(roomId);
        return null;
    }
    async updatePrice(id, roomPrice) {
        await this.roomsService.updatePrice(id, roomPrice);
        return this.getRoomById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('companyId')),
    __param(1, (0, common_1.Body)('roomType')),
    __param(2, (0, common_1.Body)('imagePath')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('rented')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Boolean]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "addrooms", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getRoomById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "deleteRoom", null);
__decorate([
    (0, common_1.Patch)(':id/:roomPrice'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('roomPrice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "updatePrice", null);
RoomsController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
exports.RoomsController = RoomsController;
//# sourceMappingURL=rooms.controller.js.map