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
import { SeatsService } from './seats.service';
export declare class SeatsController {
    private readonly seatsService;
    constructor(seatsService: SeatsService);
    addseats(restaurantId: string, tableType: string, seatImagePath: string, reservationPrice: number, seatReserved: boolean): Promise<{
        message: string;
        path: import("./Seat.Model").Seat & {
            _id: import("mongoose").Types.ObjectId;
        };
        "companyId is": string;
    }>;
    getSeatById(seatId: string): Promise<import("./Seat.Model").Seat>;
    getAllSeats(): Promise<(import("./Seat.Model").Seat & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteSeat(seatId: string): Promise<any>;
    updatePrice(id: string, reservationPrice: number): Promise<import("./Seat.Model").Seat>;
}
