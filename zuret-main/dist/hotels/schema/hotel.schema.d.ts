import * as mongoose from 'mongoose';
export declare const HotelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    tourismSite: string;
    location: string;
    rating: number;
    price: number;
    picturePath?: string;
}>;
