/// <reference types="multer" />
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './interfaces/restaurant.interface';
import { Response } from 'express';
import { getRestaurantFilterDto } from './dto/filter-restaurant.dto';
export declare class RestaurantsController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    getHotels(filterDto: getRestaurantFilterDto): Promise<Restaurant[]>;
    getOne(id: any): Promise<Restaurant>;
    update(updateRestaurantDto: CreateRestaurantDto, id: any): Promise<Restaurant>;
    delete(id: any): Promise<Restaurant>;
    deleteAll(): Promise<any>;
    uploadData(restaurantDTO: CreateRestaurantDto, file: Express.Multer.File): void;
    viewTheFile(filename: any, res: Response): Promise<void>;
}
