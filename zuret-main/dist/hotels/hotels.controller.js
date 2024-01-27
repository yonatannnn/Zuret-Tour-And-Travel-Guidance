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
exports.HotelsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_hotel_dto_1 = require("./dto/create-hotel.dto");
const hotels_service_1 = require("./hotels.service");
const multer_1 = require("multer");
const filter_hotel_dto_1 = require("./dto/filter-hotel.dto");
let HotelsController = class HotelsController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    getHotels(filterDto) {
        console.log(filterDto);
        return this.hotelService.getHotels(filterDto);
    }
    getOne(id) {
        return this.hotelService.getOne(id);
    }
    update(updateHotelDto, id) {
        return this.hotelService.update(id, updateHotelDto);
    }
    delete(id) {
        return this.hotelService.delete(id);
    }
    deleteAll() {
        return this.hotelService.deleteAll();
    }
    uploadData(hotelDTO, file) {
        if (!file) {
            throw new common_1.BadRequestException("File is not appropriate");
        }
        else {
            const filePathURL = `http://localhost:3000/hotels/viewImage/${file.filename}`;
            this.hotelService.create(hotelDTO, filePathURL);
        }
    }
    async viewTheFile(filename, res) {
        return await res.sendFile(filename, { root: './uploads' });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_hotel_dto_1.getHotelFilterDto]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "getHotels", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hotel_dto_1.CreateHotelDto, Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads",
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
                return cb(null, false);
            }
            cb(null, true);
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hotel_dto_1.CreateHotelDto, Object]),
    __metadata("design:returntype", void 0)
], HotelsController.prototype, "uploadData", null);
__decorate([
    (0, common_1.Get)('viewImage/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "viewTheFile", null);
HotelsController = __decorate([
    (0, common_1.Controller)('hotels'),
    __metadata("design:paramtypes", [hotels_service_1.HotelsService])
], HotelsController);
exports.HotelsController = HotelsController;
//# sourceMappingURL=hotels.controller.js.map