import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';
import { CreateBookDto } from './dto/create-booking.dto';
import { UpdateBookDto } from './dto/update-booking.dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    getAllBookings(): Promise<Booking[]>;
    getBooking(id: string): Promise<Booking>;
    createBooking(booking: CreateBookDto): Promise<Booking>;
    updateBooking(id: string, booking: UpdateBookDto): Promise<Booking>;
    deleteBooking(id: string): Promise<Booking>;
}
