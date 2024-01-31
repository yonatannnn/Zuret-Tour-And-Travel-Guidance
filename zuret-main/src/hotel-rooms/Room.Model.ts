import * as mongoose from "mongoose";
export const RoomSchema = new mongoose.Schema({
    companyId : String,
    roomType : String,
    price: Number,
    imagePath: String,
    rented : Boolean
});

export interface Room extends mongoose.Document {
    id: string;
    companyId : string,
    roomType: string;
    imagePath: string;
    price: number;
    rented : boolean;
  }