import { Model } from 'mongoose';
import { Seat } from './Seat.Model';
export declare class SeatsService {
    private readonly seatModel;
    constructor(seatModel: Model<Seat>);
    addSeat(companyId: string, tableType: string, seatImagePath: string, reservationPrice: number): Promise<Seat & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOneSeat(id: string): Promise<Seat>;
    getAllSeats(): Promise<(Seat & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updatePrice(id: string, price: number): Promise<Seat>;
    deleteSeat(id: string): Promise<void>;
    private findProduct;
}
