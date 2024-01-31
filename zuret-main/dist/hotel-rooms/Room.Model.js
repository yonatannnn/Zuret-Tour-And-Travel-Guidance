"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = void 0;
const mongoose = require("mongoose");
exports.RoomSchema = new mongoose.Schema({
    companyId: String,
    roomType: String,
    price: Number,
    imagePath: String,
    rented: Boolean
});
//# sourceMappingURL=Room.Model.js.map