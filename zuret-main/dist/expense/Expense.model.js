"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseSchema = void 0;
const mongoose = require("mongoose");
exports.ExpenseSchema = new mongoose.Schema({
    userId: String,
    prodId: String,
    price: Number,
    reason: String,
    date: String
});
//# sourceMappingURL=Expense.Model.js.map