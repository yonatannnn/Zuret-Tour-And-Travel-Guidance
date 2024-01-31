import { TouristSiteService } from './touristSite.service';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';


@Controller('touristSites')
export class TouristSiteController {
    constructor(private readonly touristSiteService : TouristSiteService){}
    @Post()
    async addTouristSite(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('imagePath') imagePath: string,
  ) {
        const generatedId = await this.touristSiteService.addTouristSite(name , location , imagePath);
        return { id : generatedId };
  }

  @Get()
  async getAlltouristSite() {
    const touristSites = await this.touristSiteService.getTouristSites();
    return touristSites;
  }

  @Get(':id')
  getTouristSite(@Param('id') orgId: string) {
    return this.touristSiteService.getSingleTouristSite(orgId);
  }

  @Patch(':id')
  async updateTouristSite(
    @Param('id') orgId: string,
    @Body('name') orgName: string,
    @Body('location') orgLocation: string,
    @Body('imagePath') orgImagePath : string,
  ) {
    await this.touristSiteService.updateTouristSite(orgId , orgName , orgLocation , orgImagePath);
    return this.getTouristSite(orgId);
  }

  @Delete(':id')
    async deleteTouristSite(@Param('id') touristSiteId : string){
        await this.touristSiteService.deleteTouristSite(touristSiteId);
        return null;
    }


}
