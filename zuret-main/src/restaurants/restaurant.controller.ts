import { RestaurantService } from './restaurant.service';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';


@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService : RestaurantService){}
    @Post()
    async addRestaurant(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('imagePath') imagePath: string,
    @Body('imagePath1') imagePath1: string,
  ) {
        const generatedId = await this.restaurantService.addRestaurant(name , location , imagePath, imagePath1);
        return { id : generatedId };
  }

  @Get()
  async getAllrestaurant() {
    const restaurants = await this.restaurantService.getRestaurants();
    return restaurants;
  }

  @Get(':id')
  getRestaurant(@Param('id') orgId: string) {
    return this.restaurantService.getSingleRestaurant(orgId);
  }

  @Patch(':id')
  async updateRestaurant(
    @Param('id') orgId: string,
    @Body('name') orgName: string,
    @Body('location') orgLocation: string,
    @Body('seats') orgSeats : object,
    @Body('review') orgReview : object,
    @Body('imagePath') orgImagePath : string,
    @Body('imagePath1') orgImagePath1 : string,
  ) {
    await this.restaurantService.updateRestaurant(orgId , orgName , orgLocation , orgSeats , orgReview , orgImagePath, orgImagePath1);
    return this.getRestaurant(orgId);
  }

  @Delete(':id')
    async deleteRestaurant(@Param('id') restaurantId : string){
        await this.restaurantService.deleteRestaurant(restaurantId);
        return null;
    }


}
