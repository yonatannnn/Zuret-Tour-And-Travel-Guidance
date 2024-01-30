"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carOrgSchema = void 0;
const mongoose = require("mongoose");
exports.carOrgSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    average_price: { type: Number, required: true },
    cars: { type: Object, required: true },
    review: Object,
    imagePath: { type: String, required: true }
});
//# sourceMappingURL=car-org.model.js.map