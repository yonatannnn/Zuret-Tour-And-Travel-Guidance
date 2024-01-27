"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSchema = void 0;
const mongoose = require("mongoose");
exports.HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have a name'],
        unique: true,
        trim: true
    },
    picturePath: String,
    price: {
        type: Number,
        required: [true, 'A hotel must have a price']
    },
    location: {
        type: String,
        required: [true, 'A hotel must have a location']
    },
    tourismSite: {
        type: String,
        required: [true, 'A hotel must have a site']
    },
    rating: {
        type: Number,
        required: [true, 'A hotel must have a rating']
    }
});
//# sourceMappingURL=hotel.schema.js.map