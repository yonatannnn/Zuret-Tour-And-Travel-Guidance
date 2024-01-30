import { Injectable } from '@nestjs/common';
import {Restaurant} from './interfaces/restaurant.interface'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { getRestaurantFilterDto } from './dto/filter-restaurant.dto';

@Injectable()
export class RestaurantsService {
    constructor(@InjectModel('Restaurant') private readonly restaurantModel:Model<Restaurant>){}
   
    async getRestauranta(filterDto:getRestaurantFilterDto):Promise<Restaurant[]>{
        let options={}
        const {restaurants}=filterDto
        console.log(restaurants)
        if (restaurants){
            options={
                restaurants:restaurants
            }
        }
        return await this.restaurantModel.find(options);
    }

    async getOne(id:string):Promise<Restaurant>{
        return await this.restaurantModel.findOne({_id:id});
    }

    async create(restaurant:CreateRestaurantDto,path:string):Promise<Restaurant>{
        const newRestaurant=new this.restaurantModel(restaurant);
        console.log(newRestaurant)
        newRestaurant.picturePath=path 
        return await newRestaurant.save()
    }

    async delete(id:string):Promise<Restaurant>{
        return await this.restaurantModel.findByIdAndDelete(id);
    }

    async update (id:string,restaurant:Restaurant):Promise<Restaurant>{
        return await this.restaurantModel.findByIdAndUpdate(id,restaurant,{new:true})
    }
    async deleteAll():Promise<any>{
        return await this.restaurantModel.deleteMany({})

    }


}
