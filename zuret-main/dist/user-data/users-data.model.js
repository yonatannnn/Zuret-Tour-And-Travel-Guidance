"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSchema = void 0;
const mongoose = require("mongoose");
exports.UserDataSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    }
}, { timestamps: true });
//# sourceMappingURL=users-data.model.js.map