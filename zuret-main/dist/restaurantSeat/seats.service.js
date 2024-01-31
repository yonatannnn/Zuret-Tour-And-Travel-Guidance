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
exports.SeatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const seat_1 = require("./seat");
let SeatsService = class SeatsService {
    constructor(seatModel) {
        this.seatModel = seatModel;
    }
    async addSeat(companyId, tableType, seatImagePath, reservationPrice) {
        const newSeat = new this.seatModel({
            companyId: companyId,
            tableType: tableType,
            imagePath: seatImagePath,
            price: reservationPrice,
            reserved: false
        });
        const result = await newSeat.save();
        console.log(seat_1.localSeats);
        return result.companyId;
    }
    async getOneSeat(id) {
        const result = await this.findProduct(id);
        return result.companyId;
    }
    async getAllSeats() {
        const seats = await this.seatModel.find().exec();
        return seats;
    }
    async updatePrice(id, price) {
        try {
            const seat = await this.findProduct(id);
            if (seat) {
                seat.price = price;
                await seat.save();
                console.log(`Price for car with ID ${id} updated successfully.`);
                return seat;
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
    async deleteSeat(id) {
        try {
            const result = await this.seatModel.deleteOne({ _id: id }).exec();
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
        let seat;
        try {
            seat = await this.seatModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product. ');
        }
        if (!seat) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return seat;
    }
};
SeatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Seat')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SeatsService);
exports.SeatsService = SeatsService;
//# sourceMappingURL=seats.service.js.map