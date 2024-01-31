import * as mongoose from "mongoose";
export const SeatSchema = new mongoose.Schema({
    companyId : String,
    tableType : String,
    price: Number,
    imagePath: String,
    
    reserved : Boolean
});

export interface Seat extends mongoose.Document {
    id: string;
    companyId : string,
    tableType: string;
    imagePath: string;
   
    price: number;
    reserved : boolean;
  }