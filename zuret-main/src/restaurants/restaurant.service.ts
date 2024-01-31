import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { restaurant } from './restaurant.model';
import { MongooseModule } from '@nestjs/mongoose';


@Injectable()
export class RestaurantService {
    constructor(@InjectModel('restaurant') private readonly restaurantModel : Model<restaurant>){}

    async addRestaurant(name : string , location:string , imagePath : string, imagePath1: string){
        const newRestaurant = new this.restaurantModel({
            name : name,
            location : location,
            imagePath : imagePath,
            imagePath1: imagePath1,
            review : [],
            seats : [],
            average_price : 0
        })
        const result = await newRestaurant.save();
        console.log(result);
        return result._id
    }

    async getRestaurants() {
        const restaurants = await this.restaurantModel.find().exec();
        return restaurants.map(co => ({
          id: co._id,
          name: co.name,
          location: co.location,
          average_price : co.average_price,
          seats : co.seats,
          review : co.review,
          imagePath : co.imagePath,
          imagePath1 : co.imagePath1,
        }));
    }


    async getSingleRestaurant(orgId: string) {
        const co = await this.findRestaurant(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price : co.average_price,
            seats : co.seats,
            review : co.review,
            imagePath : co.imagePath,
            imagePath1 : co.imagePath1
        };
    }

    async updateRestaurant(
        id: string,
        name: string,
        location: string,
        seats: object,
        review: object,
        imagePath: string,
        imagePath1: string
      ) {
        try {
          const updatedRestaurant = await this.findRestaurant(id);
          if (name) {
            updatedRestaurant.name = name;
          }
          if (location) {
            updatedRestaurant.location = location;
          }
          if (seats) {
            updatedRestaurant.seats = seats;
          }
          if (review) {
            updatedRestaurant.review = review;
          }
          if (imagePath) {
            updatedRestaurant.imagePath = imagePath;
          }
          if (imagePath1) {
            updatedRestaurant.imagePath1 = imagePath1;
          }
          await updatedRestaurant.save();
          return updatedRestaurant;
        } catch (error) {
          console.error('Error updating CarOrg:', error);
          throw new Error('Error updating CarOrg');
        }
      }


      async deleteRestaurant(id: string) {
        try {
            const result = await this.restaurantModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            } else {
                console.log(`Car with ID ${id} not found.`);
            }
        } catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }
      




    private async findRestaurant(id: string): Promise<restaurant> {
        let org;
        try {
          org = await this.restaurantModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find.');
        }
        if (!org) {
          throw new NotFoundException('Could not find. ');
        }
        return org;
      }
    }