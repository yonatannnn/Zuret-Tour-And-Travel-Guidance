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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HotelService = class HotelService {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async addHotel(name, location, imagePath, starStat) {
        const newHotel = new this.hotelModel({
            name: name,
            location: location,
            imagePath: imagePath,
            review: [],
            rooms: [],
            average_price: 0,
            starStat: starStat
        });
        const result = await newHotel.save();
        console.log(result);
        return result._id;
    }
    async getHotels() {
        const hotels = await this.hotelModel.find().exec();
        return hotels.map(co => ({
            id: co._id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            rooms: co.rooms,
            review: co.review,
            imagePath: co.imagePath,
            starStat: co.starStat
        }));
    }
    async getSingleHotel(hotelId) {
        const co = await this.findHotel(hotelId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price: co.average_price,
            rooms: co.rooms,
            review: co.review,
            imagePath: co.imagePath,
            starStat: co.starStat
        };
    }
    async updateHotel(id, name, location, rooms, review, imagePath, starStat) {
        try {
            const updatedHotel = await this.findHotel(id);
            if (name) {
                updatedHotel.name = name;
            }
            if (location) {
                updatedHotel.location = location;
            }
            if (rooms) {
                updatedHotel.rooms = rooms;
            }
            if (review) {
                updatedHotel.review = review;
            }
            if (starStat) {
                updatedHotel.starStat = starStat;
            }
            if (imagePath) {
                updatedHotel.imagePath = imagePath;
            }
            await updatedHotel.save();
            return updatedHotel;
        }
        catch (error) {
            console.error('Error updating CarOrg:', error);
            throw new Error('Error updating CarOrg');
        }
    }
    async deleteHotel(id) {
        try {
            const result = await this.hotelModel.deleteOne({ _id: id }).exec();
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
    async findHotel(id) {
        let org;
        try {
            org = await this.hotelModel.findById(id).exec();
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
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('hotel')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map