"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_data_controller_1 = require("./user-data.controller");
const user_data_service_1 = require("./user-data.service");
const users_data_model_1 = require("./users-data.model");
let UserDataModule = class UserDataModule {
};
UserDataModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "user", schema: users_data_model_1.UserDataSchema }])],
        providers: [user_data_service_1.UserDataService],
        exports: [user_data_service_1.UserDataService],
        controllers: [user_data_controller_1.UserDataController]
    })
], UserDataModule);
exports.UserDataModule = UserDataModule;
//# sourceMappingURL=user-data.module.js.map