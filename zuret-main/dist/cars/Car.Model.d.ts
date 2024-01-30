import * as mongoose from "mongoose";
export declare const CarSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    imagePath?: string;
    companyId?: string;
    brand?: string;
    price?: number;
    rented?: boolean;
}>;
export interface Car extends mongoose.Document {
    id: string;
    companyId: string;
    brand: string;
    imagePath: string;
    price: number;
    rented: boolean;
}
