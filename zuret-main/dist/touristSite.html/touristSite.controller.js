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
exports.TouristSiteController = void 0;
const touristSite_service_1 = require("./touristSite.service");
const common_1 = require("@nestjs/common");
let TouristSiteController = class TouristSiteController {
    constructor(touristSiteService) {
        this.touristSiteService = touristSiteService;
    }
    async addTouristSite(name, location, imagePath) {
        const generatedId = await this.touristSiteService.addTouristSite(name, location, imagePath);
        return { id: generatedId };
    }
    async getAlltouristSite() {
        const touristSites = await this.touristSiteService.getTouristSites();
        return touristSites;
    }
    getTouristSite(orgId) {
        return this.touristSiteService.getSingleTouristSite(orgId);
    }
    async updateTouristSite(orgId, orgName, orgLocation, orgImagePath) {
        await this.touristSiteService.updateTouristSite(orgId, orgName, orgLocation, orgImagePath);
        return this.getTouristSite(orgId);
    }
    async deleteTouristSite(touristSiteId) {
        await this.touristSiteService.deleteTouristSite(touristSiteId);
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
], TouristSiteController.prototype, "addTouristSite", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TouristSiteController.prototype, "getAlltouristSite", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TouristSiteController.prototype, "getTouristSite", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('location')),
    __param(3, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], TouristSiteController.prototype, "updateTouristSite", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TouristSiteController.prototype, "deleteTouristSite", null);
TouristSiteController = __decorate([
    (0, common_1.Controller)('touristSites'),
    __metadata("design:paramtypes", [touristSite_service_1.TouristSiteService])
], TouristSiteController);
exports.TouristSiteController = TouristSiteController;
//# sourceMappingURL=touristSite.controller.js.map