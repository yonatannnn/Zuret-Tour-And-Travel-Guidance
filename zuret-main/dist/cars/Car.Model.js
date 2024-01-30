"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
const mongoose = require("mongoose");
exports.CarSchema = new mongoose.Schema({
    companyId: String,
    brand: String,
    price: Number,
    imagePath: String,
    rented: Boolean
});
//# sourceMappingURL=Car.Model.js.map