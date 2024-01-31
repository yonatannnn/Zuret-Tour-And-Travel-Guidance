"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const user_data_module_1 = require("./user-data/user-data.module");
const config_1 = require("@nestjs/config");
const restaurant_module_1 = require("./restaurants/restaurant.module");
const mongo_keys_1 = require("./config/mongo.keys");
const car_org_module_1 = require("./car-org/car-org.module");
const cars_module_1 = require("./cars/cars.module");
const hotel_module_1 = require("./hotel/hotel.module");
const rooms_module_1 = require("./hotel-rooms/rooms.module");
const seats_module_1 = require("./restaurantSeat/seats.module");
const expense_module_1 = require("./expense/expense.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_data_module_1.UserDataModule, auth_module_1.AuthModule, users_module_1.UsersModule, config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(mongo_keys_1.default.mongoURi),
            user_data_module_1.UserDataModule, car_org_module_1.CarOrgModule, cars_module_1.CarsModule, hotel_module_1.HotelModule, rooms_module_1.RoomsModule, restaurant_module_1.RestaurantModule, seats_module_1.SeatsModule, expense_module_1.ExpenseModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map