import { Restaurant } from './interfaces/restaurant.interface';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { getRestaurantFilterDto } from './dto/filter-restaurant.dto';
export declare class RestaurantsService {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<Restaurant>);
    getRestauranta(filterDto: getRestaurantFilterDto): Promise<Restaurant[]>;
    getOne(id: string): Promise<Restaurant>;
    create(restaurant: CreateRestaurantDto, path: string): Promise<Restaurant>;
    delete(id: string): Promise<Restaurant>;
    update(id: string, restaurant: Restaurant): Promise<Restaurant>;
    deleteAll(): Promise<any>;
}
