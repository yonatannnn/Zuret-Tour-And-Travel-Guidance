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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_1 = require("./room");
let RoomsService = class RoomsService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async addRoom(companyId, roomType, roomImagePath, roomPrice) {
        const newRoom = new this.roomModel({
            companyId: companyId,
            roomType: roomType,
            imagePath: roomImagePath,
            price: roomPrice,
            rented: false
        });
        const result = await newRoom.save();
        console.log(room_1.localRooms);
        return result.companyId;
    }
    async getOneRoom(id) {
        const result = await this.findProduct(id);
        return result;
    }
    async getAllRooms() {
        const cars = await this.roomModel.find().exec();
        return cars;
    }
    async updatePrice(id, price) {
        try {
            const room = await this.findProduct(id);
            if (room) {
                room.price = price;
                await room.save();
                console.log(`Price for car with ID ${id} updated successfully.`);
                return room;
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
    async deleteRoom(id) {
        try {
            const result = await this.roomModel.deleteOne({ _id: id }).exec();
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
        let room;
        try {
            room = await this.roomModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product. ');
        }
        if (!room) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return room;
    }
};
RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map