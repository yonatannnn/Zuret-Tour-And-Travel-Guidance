import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { carOrg } from './car-org.model';
import { MongooseModule } from '@nestjs/mongoose';


@Injectable()
export class CarOrgService {
    constructor(@InjectModel('carOrg') private readonly carOrgModel : Model<carOrg>){}

    async addCarOrg(name : string , location:string , imagePath : string){
        const newCarOrg = new this.carOrgModel({
            name : name,
            location : location,
            imagePath : imagePath,
            review : [],
            cars : [],
            average_price : 0
        })
        const result = await newCarOrg.save();
        console.log(result);
        return result._id
    }

    async getCarOrgs() {
        const carOrgs = await this.carOrgModel.find().exec();
        return carOrgs.map(co => ({
          id: co._id,
          name: co.name,
          location: co.location,
          average_price : co.average_price,
          cars : co.cars,
          review : co.review,
          imagePath : co.imagePath
        }));
    }


    async getSingleCarOrg(orgId: string) {
        const co = await this.findCarOrg(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price : co.average_price,
            cars : co.cars,
            review : co.review,
            imagePath : co.imagePath
        };
    }

    async updateCarOrg(
        id: string,
        name: string,
        location: string,
        cars: object,
        review: object,
        imagePath: string
      ) {
        try {
          const updatedCarOrg = await this.findCarOrg(id);
          if (name) {
            updatedCarOrg.name = name;
          }
          if (location) {
            updatedCarOrg.location = location;
          }
          if (cars) {
            updatedCarOrg.cars = cars;
          }
          if (review) {
            updatedCarOrg.review = review;
          }
          if (imagePath) {
            updatedCarOrg.imagePath = imagePath;
          }
          await updatedCarOrg.save();
          return updatedCarOrg;
        } catch (error) {
          console.error('Error updating CarOrg:', error);
          throw new Error('Error updating CarOrg');
        }
      }


      async deleteCarOrg(id: string) {
        try {
            const result = await this.carOrgModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            } else {
                console.log(`Car with ID ${id} not found.`);
            }
        } catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }
      




    private async findCarOrg(id: string): Promise<carOrg> {
        let org;
        try {
          org = await this.carOrgModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find.');
        }
        if (!org) {
          throw new NotFoundException('Could not find. ');
        }
        return org;
      }
    }