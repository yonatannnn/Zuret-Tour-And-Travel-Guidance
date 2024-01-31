import * as mongoose from 'mongoose';
export declare const hotelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: string;
    average_price: number;
    imagePath: string;
    rooms: any;
    starStat: number;
    review?: any;
}>;
export interface hotel extends mongoose.Document {
    id: string;
    name: string;
    location: string;
    average_price: number;
    rooms: object;
    review: object;
    imagePath: string;
    starStat: number;
}
