"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelSchema = void 0;
const mongoose = require("mongoose");
exports.hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    average_price: { type: Number, required: true },
    rooms: { type: Object, required: true },
    review: Object,
    starStat: { type: Number, required: true },
    imagePath: { type: String, required: true }
});
//# sourceMappingURL=hotel.model.js.map