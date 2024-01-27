import * as mongoose from "mongoose";
export declare const UserDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    fullname: string;
    country: string;
    role?: string;
}>;
export interface User extends mongoose.Document {
    _id: string;
    fullname: string;
    country: string;
    email: string;
    password: string;
}
