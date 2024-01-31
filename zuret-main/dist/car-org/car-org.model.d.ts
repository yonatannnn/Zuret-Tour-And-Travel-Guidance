import * as mongoose from 'mongoose';
export declare const carOrgSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: string;
    average_price: number;
    imagePath: string;
    cars: any;
    review?: any;
}>;
export interface carOrg extends mongoose.Document {
    id: string;
    name: string;
    location: string;
    average_price: number;
    cars: object;
    review: object;
    imagePath: string;
}
