"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsModule = void 0;
const common_1 = require("@nestjs/common");
const rooms_controller_1 = require("./rooms.controller");
const rooms_service_1 = require("./rooms.service");
const Room_Model_1 = require("./Room.Model");
const mongoose_1 = require("@nestjs/mongoose");
let RoomsModule = class RoomsModule {
};
RoomsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Room', schema: Room_Model_1.RoomSchema }]),],
        controllers: [rooms_controller_1.RoomsController],
        providers: [rooms_service_1.RoomsService]
    })
], RoomsModule);
exports.RoomsModule = RoomsModule;
//# sourceMappingURL=rooms.module.js.map