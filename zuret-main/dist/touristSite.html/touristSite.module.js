"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouristSiteModule = void 0;
const common_1 = require("@nestjs/common");
const touristSite_controller_1 = require("./touristSite.controller");
const touristSite_service_1 = require("./touristSite.service");
const mongoose_1 = require("@nestjs/mongoose");
const touristSite_model_1 = require("./touristSite.model");
let TouristSiteModule = class TouristSiteModule {
};
TouristSiteModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'touristSite', schema: touristSite_model_1.touristSiteSchema }])],
        controllers: [touristSite_controller_1.TouristSiteController],
        providers: [touristSite_service_1.TouristSiteService]
    })
], TouristSiteModule);
exports.TouristSiteModule = TouristSiteModule;
//# sourceMappingURL=touristSite.module.js.map