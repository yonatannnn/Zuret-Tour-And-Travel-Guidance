import * as mongoose from "mongoose";
export const CarSchema = new mongoose.Schema({
    companyId : String,
    brand : String,
    price: Number,
    imagePath: String,
    rented : Boolean
});

export interface Car extends mongoose.Document {
    id: string;
    companyId : string,
    brand: string;
    imagePath: string;
    price: number;
    rented : boolean;
  }