"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatSchema = void 0;
const mongoose = require("mongoose");
exports.SeatSchema = new mongoose.Schema({
    companyId: String,
    tableType: String,
    price: Number,
    imagePath: String,
    reserved: Boolean
});
//# sourceMappingURL=Seat.Model.js.map