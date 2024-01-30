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
exports.HotelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let HotelsService = class HotelsService {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async getHotels(filterDto) {
        let options = {};
        const { hotels } = filterDto;
        console.log(hotels);
        if (hotels) {
            options = {
                hotels: hotels
            };
        }
        return await this.hotelModel.find(options);
    }
    async getOne(id) {
        return await this.hotelModel.findOne({ _id: id });
    }
    async create(hotel, path) {
        const newHotel = new this.hotelModel(hotel);
        console.log(newHotel);
        newHotel.picturePath = path;
        return await newHotel.save();
    }
    async delete(id) {
        return await this.hotelModel.findByIdAndRemove(id);
    }
    async update(id, hotel) {
        return await this.hotelModel.findByIdAndUpdate(id, hotel, { new: true });
    }
    async deleteAll() {
        return await this.hotelModel.deleteMany({});
    }
};
HotelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Hotel')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HotelsService);
exports.HotelsService = HotelsService;
//# sourceMappingURL=hotels.service.js.map