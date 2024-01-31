import * as mongoose from "mongoose";
export declare const ExpenseSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    date?: string;
    price?: number;
    userId?: string;
    prodId?: string;
    reason?: string;
}>;
export interface Expense extends mongoose.Document {
    id: string;
    userId: string;
    prodId: string;
    reason: string;
    price: number;
    date: string;
}
