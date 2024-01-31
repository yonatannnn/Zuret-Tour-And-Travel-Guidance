"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.touristSiteSchema = void 0;
const mongoose = require("mongoose");
exports.touristSiteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    imagePath: { type: String, required: true }
});
//# sourceMappingURL=touristSite.model.js.map