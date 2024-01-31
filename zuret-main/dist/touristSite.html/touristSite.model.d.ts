import * as mongoose from 'mongoose';
export declare const touristSiteSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    location: string;
    imagePath: string;
}>;
export interface touristSite extends mongoose.Document {
    id: string;
    name: string;
    location: string;
    imagePath: string;
}
