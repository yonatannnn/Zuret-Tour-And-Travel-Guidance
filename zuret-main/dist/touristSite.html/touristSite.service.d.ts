import { Model } from 'mongoose';
import { touristSite } from './touristSite.model';
export declare class TouristSiteService {
    private readonly touristSiteModel;
    constructor(touristSiteModel: Model<touristSite>);
    addTouristSite(name: string, location: string, imagePath: string): Promise<any>;
    getTouristSites(): Promise<{
        id: any;
        name: string;
        location: string;
        imagePath: string;
    }[]>;
    getSingleTouristSite(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        imagePath: string;
    }>;
    updateTouristSite(id: string, name: string, location: string, imagePath: string): Promise<touristSite>;
    deleteTouristSite(id: string): Promise<void>;
    private findTouristSite;
}
