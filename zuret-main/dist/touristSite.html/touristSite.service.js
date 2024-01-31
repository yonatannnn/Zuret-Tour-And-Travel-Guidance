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
exports.TouristSiteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TouristSiteService = class TouristSiteService {
    constructor(touristSiteModel) {
        this.touristSiteModel = touristSiteModel;
    }
    async addTouristSite(name, location, imagePath) {
        const newTouristSite = new this.touristSiteModel({
            name: name,
            location: location,
            imagePath: imagePath,
        });
        const result = await newTouristSite.save();
        console.log(result);
        return result._id;
    }
    async getTouristSites() {
        const touristSites = await this.touristSiteModel.find().exec();
        return touristSites.map(co => ({
            id: co._id,
            name: co.name,
            location: co.location,
            imagePath: co.imagePath
        }));
    }
    async getSingleTouristSite(orgId) {
        const co = await this.findTouristSite(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            imagePath: co.imagePath
        };
    }
    async updateTouristSite(id, name, location, imagePath) {
        try {
            const updatedTouristSite = await this.findTouristSite(id);
            if (name) {
                updatedTouristSite.name = name;
            }
            if (location) {
                updatedTouristSite.location = location;
            }
            if (imagePath) {
                updatedTouristSite.imagePath = imagePath;
            }
            await updatedTouristSite.save();
            return updatedTouristSite;
        }
        catch (error) {
            console.error('Error updating CarOrg:', error);
            throw new Error('Error updating CarOrg');
        }
    }
    async deleteTouristSite(id) {
        try {
            const result = await this.touristSiteModel.deleteOne({ _id: id }).exec();
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
    async findTouristSite(id) {
        let org;
        try {
            org = await this.touristSiteModel.findById(id).exec();
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
TouristSiteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('touristSite')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TouristSiteService);
exports.TouristSiteService = TouristSiteService;
//# sourceMappingURL=touristSite.service.js.map