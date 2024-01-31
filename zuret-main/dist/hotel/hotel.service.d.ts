import { Model } from 'mongoose';
import { hotel } from './hotel.model';
export declare class HotelService {
    private readonly hotelModel;
    constructor(hotelModel: Model<hotel>);
    addHotel(name: string, location: string, imagePath: string, starStat: number): Promise<any>;
    getHotels(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        rooms: object;
        review: object;
        imagePath: string;
    }[]>;
    getSingleHotel(hotelId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        rooms: object;
        review: object;
        imagePath: string;
        starStat: number;
    }>;
    updateHotel(id: string, name: string, location: string, rooms: object, review: object, imagePath: string, starStat: number): Promise<hotel>;
    deleteHotel(id: string): Promise<void>;
    private findHotel;
}
