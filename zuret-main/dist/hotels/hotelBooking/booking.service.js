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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const booking_schema_1 = require("./schemas/booking.schema");
let BookingService = class BookingService {
    constructor(bookingModel) {
        this.bookingModel = bookingModel;
    }
    async findAll() {
        const bookings = await this.bookingModel.find();
        return bookings;
    }
    async create(booking) {
        const res = await this.bookingModel.create(booking);
        return res;
    }
    async findById(id) {
        const ress = await this.bookingModel.findById(id);
        if (!ress) {
            throw new common_1.NotFoundException('Booking not found');
        }
        return ress;
    }
    async updateById(id, booking) {
        return await this.bookingModel.findByIdAndUpdate(id, booking, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.bookingModel.findByIdAndDelete(id);
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(booking_schema_1.Booking.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map