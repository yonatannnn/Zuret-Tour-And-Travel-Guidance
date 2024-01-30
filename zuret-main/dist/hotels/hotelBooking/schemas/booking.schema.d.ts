import mongoose from "mongoose";
import { User } from "src/users/users.service";
export declare class Booking {
    fullName: string;
    email: string;
    hairStyle: string;
    date: string;
    time: string;
    comment: string;
    user: User;
}
export declare const BookingSchema: mongoose.Schema<Booking, mongoose.Model<Booking, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Booking>;
