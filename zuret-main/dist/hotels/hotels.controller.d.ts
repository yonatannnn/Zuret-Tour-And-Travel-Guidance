/// <reference types="multer" />
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelsService } from './hotels.service';
import { Hotel } from './interfaces/hotel.interface';
import { Response } from 'express';
import { getHotelFilterDto } from './dto/filter-hotel.dto';
export declare class HotelsController {
    private readonly hotelService;
    constructor(hotelService: HotelsService);
    getHotels(filterDto: getHotelFilterDto): Promise<Hotel[]>;
    getOne(id: any): Promise<Hotel>;
    update(updateHotelDto: CreateHotelDto, id: any): Promise<Hotel>;
    delete(id: any): Promise<Hotel>;
    deleteAll(): Promise<any>;
    uploadData(hotelDTO: CreateHotelDto, file: Express.Multer.File): void;
    viewTheFile(filename: any, res: Response): Promise<void>;
}
