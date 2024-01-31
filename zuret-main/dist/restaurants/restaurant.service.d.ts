import { Model } from 'mongoose';
import { restaurant } from './restaurant.model';
export declare class RestaurantService {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<restaurant>);
    addRestaurant(name: string, location: string, imagePath: string): Promise<any>;
    getRestaurants(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        seats: object;
        review: object;
        imagePath: string;
    }[]>;
    getSingleRestaurant(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        seats: object;
        review: object;
        imagePath: string;
    }>;
    updateRestaurant(id: string, name: string, location: string, seats: object, review: object, imagePath: string): Promise<restaurant>;
    deleteRestaurant(id: string): Promise<void>;
    private findRestaurant;
}
