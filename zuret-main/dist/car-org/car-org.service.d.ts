import { Model } from 'mongoose';
import { carOrg } from './car-org.model';
export declare class CarOrgService {
    private readonly carOrgModel;
    constructor(carOrgModel: Model<carOrg>);
    addCarOrg(name: string, location: string, imagePath: string): Promise<any>;
    getCarOrgs(): Promise<{
        id: any;
        name: string;
        location: string;
        average_price: number;
        cars: object;
        review: object;
        imagePath: string;
    }[]>;
    getSingleCarOrg(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        average_price: number;
        cars: object;
        review: object;
        imagePath: string;
    }>;
    updateCarOrg(id: string, name: string, location: string, cars: object, review: object, imagePath: string): Promise<carOrg>;
    deleteCarOrg(id: string): Promise<void>;
    private findCarOrg;
}
