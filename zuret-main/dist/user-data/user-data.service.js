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
exports.UserDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserDataService = class UserDataService {
    constructor(userdataModel) {
        this.userdataModel = userdataModel;
    }
    async insertUser(signUpDto) {
        const email = signUpDto.email.toLowerCase();
        signUpDto.role = "user";
        const newUser = new this.userdataModel(signUpDto);
        await newUser.save();
        return newUser;
    }
    async findOne(email) {
        return this.users.find(user => user.email === email);
    }
    async getUser(email) {
        const useremail = email.toLowerCase();
        const user = await this.userdataModel.findOne({ email: useremail });
        return user;
    }
    async delete_user(email) {
        const useremail = email.toLowerCase();
        const user = await this.userdataModel.findOneAndDelete({ email: useremail });
        return user;
    }
    async get_user(email) {
        const useremail = email.toLowerCase();
        const user = await this.userdataModel.findOne({ email: useremail });
        return user;
    }
    async get_all_users() {
        const allUsers = await this.userdataModel.find({});
        return allUsers;
    }
    async update_password(logindto) {
        const user = await this.getUser(logindto.email);
        const passwordValid = await bcrypt.compare(logindto.password, user.password);
        if (user && passwordValid) {
            const saltOrRounds = 10;
            const hashedPassword = await bcrypt.hash(logindto.newPassword, saltOrRounds);
            logindto.newPassword = hashedPassword;
            return this.userdataModel.findOneAndUpdate({ email: logindto.email }, { password: logindto.newPassword }, { new: true });
        }
    }
    async createDefaultAdmin(signUpDto) {
        const defaultAdmin = await this.userdataModel.findOne({ email: "admin@email.com" });
        if (!defaultAdmin) {
            signUpDto.role = "Admin";
            const newAdmin = new this.userdataModel(signUpDto);
            await newAdmin.save();
            return newAdmin;
        }
    }
};
UserDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserDataService);
exports.UserDataService = UserDataService;
//# sourceMappingURL=user-data.service.js.map