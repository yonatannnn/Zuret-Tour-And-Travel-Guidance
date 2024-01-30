import * as mongoose from 'mongoose';
export declare const HotelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: string;
    roomPrice: number;
    starStat: number;
    picturePath?: string;
}>;
