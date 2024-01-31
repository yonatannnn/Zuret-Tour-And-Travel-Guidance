"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantSchema = void 0;
const mongoose = require("mongoose");
exports.restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    average_price: { type: Number, required: true },
    seats: { type: Object, required: true },
    review: Object,
    imagePath: { type: String, required: true },
});
//# sourceMappingURL=restaurant.model.js.map