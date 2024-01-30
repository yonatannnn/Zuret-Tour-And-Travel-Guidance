import * as mongoose from 'mongoose';
import { Booking } from './schemas/booking.schema';
export declare class BookingService {
    private bookingModel;
    constructor(bookingModel: mongoose.Model<Booking>);
    findAll(): Promise<Booking[]>;
    create(booking: Booking): Promise<Booking>;
    findById(id: string): Promise<Booking>;
    updateById(id: string, booking: Booking): Promise<Booking>;
    deleteById(id: string): Promise<Booking>;
}
