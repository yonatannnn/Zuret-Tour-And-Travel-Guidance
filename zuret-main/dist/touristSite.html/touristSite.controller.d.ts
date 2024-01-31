import { TouristSiteService } from './touristSite.service';
export declare class TouristSiteController {
    private readonly touristSiteService;
    constructor(touristSiteService: TouristSiteService);
    addTouristSite(name: string, location: string, imagePath: string): Promise<{
        id: any;
    }>;
    getAlltouristSite(): Promise<{
        id: any;
        name: string;
        location: string;
        imagePath: string;
    }[]>;
    getTouristSite(orgId: string): Promise<{
        id: string;
        name: string;
        location: string;
        imagePath: string;
    }>;
    updateTouristSite(orgId: string, orgName: string, orgLocation: string, orgImagePath: string): Promise<{
        id: string;
        name: string;
        location: string;
        imagePath: string;
    }>;
    deleteTouristSite(touristSiteId: string): Promise<any>;
}
