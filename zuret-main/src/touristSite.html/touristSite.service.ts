import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { touristSite } from './touristSite.model';
import { MongooseModule } from '@nestjs/mongoose';


@Injectable()
export class TouristSiteService {
    constructor(@InjectModel('touristSite') private readonly touristSiteModel : Model<touristSite>){}

    async addTouristSite(name : string , location:string , imagePath : string){
        const newTouristSite = new this.touristSiteModel({
            name : name,
            location : location,
            imagePath : imagePath,
            
        })
        const result = await newTouristSite.save();
        console.log(result);
        return result._id
    }

    async getTouristSites() {
        const touristSites = await this.touristSiteModel.find().exec();
        return touristSites.map(co => ({
          id: co._id,
          name: co.name,
          location: co.location,
          imagePath : co.imagePath
        }));
    }


    async getSingleTouristSite(orgId: string) {
        const co = await this.findTouristSite(orgId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            
            imagePath : co.imagePath
        };
    }

    async updateTouristSite(
        id: string,
        name: string,
        location: string,
        imagePath: string
      ) {
        try {
          const updatedTouristSite = await this.findTouristSite(id);
          if (name) {
            updatedTouristSite.name = name;
          }
          if (location) {
            updatedTouristSite.location = location;
          }
          
          if (imagePath) {
            updatedTouristSite.imagePath = imagePath;
          }
          await updatedTouristSite.save();
          return updatedTouristSite;
        } catch (error) {
          console.error('Error updating CarOrg:', error);
          throw new Error('Error updating CarOrg');
        }
      }


      async deleteTouristSite(id: string) {
        try {
            const result = await this.touristSiteModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            } else {
                console.log(`Car with ID ${id} not found.`);
            }
        } catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }
      




    private async findTouristSite(id: string): Promise<touristSite> {
        let org;
        try {
          org = await this.touristSiteModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find.');
        }
        if (!org) {
          throw new NotFoundException('Could not find. ');
        }
        return org;
      }
    }