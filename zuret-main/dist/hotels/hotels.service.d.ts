import { Hotel } from './interfaces/hotel.interface';
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { getHotelFilterDto } from './dto/filter-hotel.dto';
export declare class HotelsService {
    private readonly hotelModel;
    constructor(hotelModel: Model<Hotel>);
    getHotels(filterDto: getHotelFilterDto): Promise<Hotel[]>;
    getOne(id: string): Promise<Hotel>;
    create(hotel: CreateHotelDto, path: string): Promise<Hotel>;
    delete(id: string): Promise<Hotel>;
    update(id: string, hotel: Hotel): Promise<Hotel>;
    deleteAll(): Promise<any>;
}
