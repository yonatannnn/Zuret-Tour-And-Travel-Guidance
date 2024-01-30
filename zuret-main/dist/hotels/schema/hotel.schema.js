"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSchema = void 0;
const mongoose = require("mongoose");
exports.HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have a name'],
    },
    picturePath: String,
    location: {
        type: String,
        required: [true, 'A hotel must have a location']
    },
    starStat: {
        type: Number,
        required: [true, 'A hotel must have a starStatus']
    },
    roomPrice: {
        type: Number,
        required: [true, 'A hotel must have an average price']
    }
});
//# sourceMappingURL=hotel.schema.js.map