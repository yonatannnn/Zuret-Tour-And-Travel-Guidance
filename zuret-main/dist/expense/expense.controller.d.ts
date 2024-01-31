/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ExpenseService } from './expense.service';
export declare class ExpenseController {
    private readonly expensesService;
    constructor(expensesService: ExpenseService);
    addcars(carCompanyId: string, carBrand: string, carImagePath: string, carPrice: number): Promise<{
        message: string;
        path: number;
        "companyId is": string;
    }>;
    getAllCars(): Promise<(import("./Expense.model").Expense & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCarById(expenseId: string): Promise<string>;
    deleteCar(carId: string): Promise<any>;
}
