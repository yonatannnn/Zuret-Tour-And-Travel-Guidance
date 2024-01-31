"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatsModule = void 0;
const common_1 = require("@nestjs/common");
const seats_controller_1 = require("./seats.controller");
const seats_service_1 = require("./seats.service");
const Seat_Model_1 = require("./Seat.Model");
const mongoose_1 = require("@nestjs/mongoose");
let SeatsModule = class SeatsModule {
};
SeatsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Seat', schema: Seat_Model_1.SeatSchema }]),],
        controllers: [seats_controller_1.SeatsController],
        providers: [seats_service_1.SeatsService]
    })
], SeatsModule);
exports.SeatsModule = SeatsModule;
//# sourceMappingURL=seats.module.js.map