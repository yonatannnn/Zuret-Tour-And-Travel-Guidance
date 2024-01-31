import * as mongoose from "mongoose";
export const ExpenseSchema = new mongoose.Schema({
    userId : String,
    prodId : String,
    price: Number,
    reason : String,
    date : String
});

export interface Expense extends mongoose.Document {
    id: string;
    userId : string,
    prodId : string,
    reason: string;
    price: number;
    date : string;
  }