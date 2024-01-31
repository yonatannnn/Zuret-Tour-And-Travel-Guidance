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
