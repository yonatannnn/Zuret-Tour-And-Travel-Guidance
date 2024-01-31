import { RestaurantService } from './restaurant.service';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    addRestaurant(name: string, location: string, imagePath: string, imagePath1: string): Promise<{
        id: any;
    }>;
    getAllrestaurant(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        seats: object;
        review: object;
        imagePath: string;
        imagePath1: string;
    }[]>;
    getRestaurant(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        seats: object;
        review: object;
        imagePath: string;
        imagePath1: string;
    }>;
    updateRestaurant(orgId: string, orgName: string, orgLocation: string, orgSeats: object, orgReview: object, orgImagePath: string, orgImagePath1: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        seats: object;
        review: object;
        imagePath: string;
        imagePath1: string;
    }>;
    deleteRestaurant(restaurantId: string): Promise<any>;
}
