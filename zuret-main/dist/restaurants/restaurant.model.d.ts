import * as mongoose from 'mongoose';
export declare const restaurantSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: string;
    average_price: number;
    seats: any;
    imagePath: string;
    review?: any;
}>;
export interface restaurant extends mongoose.Document {
    id: string;
    name: string;
    location: string;
    average_price: number;
    seats: object;
    review: object;
    imagePath: string;
}
