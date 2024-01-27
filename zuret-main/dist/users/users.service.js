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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_data_service_1 = require("../user-data/user-data.service");
let UsersService = class UsersService {
    constructor(userDataService) {
        this.userDataService = userDataService;
    }
    async insertUser(signUpDto) {
        const email = signUpDto.email;
        if (email === "admin@email.com") {
            const result = this.userDataService.createDefaultAdmin(signUpDto);
            return result;
        }
        else {
            const result = this.userDataService.insertUser(signUpDto);
            return result;
        }
    }
    async delete_user(email) {
        const deleted_user = this.userDataService.delete_user(email);
        return deleted_user;
    }
    async update_password(loginDto) {
        return this.userDataService.update_password(loginDto);
    }
    async get_all_users() {
        return this.userDataService.get_all_users();
    }
    async get_user(email) {
        return this.userDataService.get_user(email);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_data_service_1.UserDataService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map