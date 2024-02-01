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
exports.CarOrgController = void 0;
const car_org_service_1 = require("./car-org.service");
const common_1 = require("@nestjs/common");
let CarOrgController = class CarOrgController {
    constructor(carOrgService) {
        this.carOrgService = carOrgService;
    }
    async addCarOrg(name, location, imagePath) {
        const generatedId = await this.carOrgService.addCarOrg(name, location, imagePath);
        return { id: generatedId, message: "car company added successfully" };
    }
    async getAllcarOrg() {
        const carOrgs = await this.carOrgService.getCarOrgs();
        return carOrgs;
    }
    getCarOrg(orgId) {
        return this.carOrgService.getSingleCarOrg(orgId);
    }
    async updateCarOrg(orgId, orgName, orgLocation, orgCars, orgReview, orgImagePath) {
        await this.carOrgService.updateCarOrg(orgId, orgName, orgLocation, orgCars, orgReview, orgImagePath);
        return this.getCarOrg(orgId);
    }
    async deleteCarOrg(carOrgId) {
        await this.carOrgService.deleteCarOrg(carOrgId);
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
], CarOrgController.prototype, "addCarOrg", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarOrgController.prototype, "getAllcarOrg", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarOrgController.prototype, "getCarOrg", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('location')),
    __param(3, (0, common_1.Body)('cars')),
    __param(4, (0, common_1.Body)('review')),
    __param(5, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object, String]),
    __metadata("design:returntype", Promise)
], CarOrgController.prototype, "updateCarOrg", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarOrgController.prototype, "deleteCarOrg", null);
CarOrgController = __decorate([
    (0, common_1.Controller)('car-org'),
    __metadata("design:paramtypes", [car_org_service_1.CarOrgService])
], CarOrgController);
exports.CarOrgController = CarOrgController;
//# sourceMappingURL=car-org.controller.js.map