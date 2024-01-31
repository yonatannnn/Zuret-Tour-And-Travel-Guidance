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
exports.FileUploadMiddleware = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
let FileUploadMiddleware = class FileUploadMiddleware {
    constructor() { }
    use(req, res, next) {
        const storage = multer.memoryStorage();
        const upload = multer({ storage }).single('car-image');
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(500).send('Multer error');
            }
            else if (err) {
                res.status(500).send('Unknown error');
            }
            else {
                next();
            }
        });
    }
};
FileUploadMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileUploadMiddleware);
exports.FileUploadMiddleware = FileUploadMiddleware;
//# sourceMappingURL=file-upload.middleware.js.map