import { HotelService } from './hotel.service';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    addHotel(name: string, location: string, imagePath: string, starStat: number): Promise<{
        id: any;
    }>;
    getAllhotel(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        rooms: object;
        review: object;
        imagePath: string;
    }[]>;
    getHotel(roId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        rooms: object;
        review: object;
        imagePath: string;
        starStat: number;
    }>;
    updateHotel(hotelId: string, hotelName: string, hotelLocation: string, hotelRooms: object, hotelReview: object, starStat: number, hotelImagePath: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        rooms: object;
        review: object;
        imagePath: string;
        starStat: number;
    }>;
    deleteHotel(hotelId: string): Promise<any>;
}
