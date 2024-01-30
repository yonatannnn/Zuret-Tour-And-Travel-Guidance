"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarOrgModule = void 0;
const common_1 = require("@nestjs/common");
const car_org_controller_1 = require("./car-org.controller");
const car_org_service_1 = require("./car-org.service");
const mongoose_1 = require("@nestjs/mongoose");
const car_org_model_1 = require("./car-org.model");
let CarOrgModule = class CarOrgModule {
};
CarOrgModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'carOrg', schema: car_org_model_1.carOrgSchema }])],
        controllers: [car_org_controller_1.CarOrgController],
        providers: [car_org_service_1.CarOrgService]
    })
], CarOrgModule);
exports.CarOrgModule = CarOrgModule;
//# sourceMappingURL=car-org.module.js.map