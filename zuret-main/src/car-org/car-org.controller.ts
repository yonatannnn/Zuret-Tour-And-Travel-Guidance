import { CarOrgService } from './car-org.service';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';


@Controller('car-org')
export class CarOrgController {
    constructor(private readonly carOrgService : CarOrgService){}
    @Post()
    async addCarOrg(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('imagePath') imagePath: string,
  ) {
        const generatedId = await this.carOrgService.addCarOrg(name , location , imagePath);
        return { id : generatedId, message :"car company added successfully" };
  }

  @Get()
  async getAllcarOrg() {
    const carOrgs = await this.carOrgService.getCarOrgs();
    return carOrgs;
  }

  @Get(':id')
  getCarOrg(@Param('id') orgId: string) {
    return this.carOrgService.getSingleCarOrg(orgId);
  }

  @Patch(':id')
  async updateCarOrg(
    @Param('id') orgId: string,
    @Body('name') orgName: string,
    @Body('location') orgLocation: string,
    @Body('cars') orgCars : object,
    @Body('review') orgReview : object,
    @Body('imagePath') orgImagePath : string,
  ) {
    await this.carOrgService.updateCarOrg(orgId , orgName , orgLocation , orgCars , orgReview , orgImagePath);
    return this.getCarOrg(orgId);
  }

  @Delete(':id')
    async deleteCarOrg(@Param('id') carOrgId : string){
        await this.carOrgService.deleteCarOrg(carOrgId);
        return null;
    }


}
