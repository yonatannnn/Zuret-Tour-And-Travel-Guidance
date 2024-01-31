import * as mongoose from "mongoose";
export declare const RoomSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    imagePath?: string;
    companyId?: string;
    price?: number;
    rented?: boolean;
    roomType?: string;
}>;
export interface Room extends mongoose.Document {
    id: string;
    companyId: string;
    roomType: string;
    imagePath: string;
    price: number;
    rented: boolean;
}
