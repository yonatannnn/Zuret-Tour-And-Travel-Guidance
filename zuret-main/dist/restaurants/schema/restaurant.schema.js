"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSchema = void 0;
const mongoose = require("mongoose");
exports.RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have a name'],
        unique: true,
        trim: true
    },
    picturePath: String,
    location: {
        type: String,
        required: [true, 'A hotel must have a location']
    }
});
//# sourceMappingURL=restaurant.schema.js.map