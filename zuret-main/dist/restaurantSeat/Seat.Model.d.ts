import * as mongoose from "mongoose";
export declare const SeatSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    imagePath?: string;
    companyId?: string;
    price?: number;
    tableType?: string;
    reserved?: boolean;
}>;
export interface Seat extends mongoose.Document {
    id: string;
    companyId: string;
    tableType: string;
    imagePath: string;
    price: number;
    reserved: boolean;
}
