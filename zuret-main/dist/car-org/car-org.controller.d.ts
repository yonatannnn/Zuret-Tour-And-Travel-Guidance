import { CarOrgService } from './car-org.service';
export declare class CarOrgController {
    private readonly carOrgService;
    constructor(carOrgService: CarOrgService);
    addCarOrg(name: string, location: string, imagePath: string): Promise<{
        id: any;
    }>;
    getAllcarOrg(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        cars: object;
        review: object;
        imagePath: string;
    }[]>;
    getCarOrg(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        cars: object;
        review: object;
        imagePath: string;
    }>;
    updateCarOrg(orgId: string, orgName: string, orgLocation: string, orgCars: object, orgReview: object, orgImagePath: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        cars: object;
        review: object;
        imagePath: string;
    }>;
    deleteCarOrg(carOrgId: string): Promise<any>;
}
