import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hotel } from './hotel.model';
import { MongooseModule } from '@nestjs/mongoose';


@Injectable()
export class HotelService {
    constructor(@InjectModel('hotel') private readonly hotelModel : Model<hotel>){}

    async addHotel(name : string , location:string , imagePath : string, starStat:number){
        const newHotel = new this.hotelModel({
            name : name,
            location : location,
            imagePath : imagePath,
            review : [],
            rooms : [],
            average_price : 0,
            starStat: starStat

        })
        const result = await newHotel.save();
        console.log(result);
        return result._id
    }

    async getHotels() {
        const hotels = await this.hotelModel.find().exec();
        return hotels.map(co => ({
          id: co._id,
          name: co.name,
          location: co.location,
          average_price : co.average_price,
          rooms : co.rooms,
          review : co.review,
          imagePath : co.imagePath
        }));
    }


    async getSingleHotel(hotelId: string) {
        const co = await this.findHotel(hotelId);
        return {
            id: co.id,
            name: co.name,
            location: co.location,
            average_price : co.average_price,
            rooms : co.rooms,
            review : co.review,
            imagePath : co.imagePath,
            starStat: co.starStat
        };
    }

    async updateHotel(
        id: string,
        name: string,
        location: string,
        rooms: object,
        review: object,
        imagePath: string,
        starStat:number
      ) {
        try {
          const updatedHotel = await this.findHotel(id);
          if (name) {
            updatedHotel.name = name;
          }
          if (location) {
            updatedHotel.location = location;
          }
          if (rooms) {
            updatedHotel.rooms = rooms;
          }
          if (review) {
            updatedHotel.review = review;
          }
          if (starStat) {
            updatedHotel.starStat = starStat;
          }
          if (imagePath) {
            updatedHotel.imagePath = imagePath;
          }
          await updatedHotel.save();
          return updatedHotel;
        } catch (error) {
          console.error('Error updating CarOrg:', error);
          throw new Error('Error updating CarOrg');
        }
      }


      async deleteHotel(id: string) {
        try {
            const result = await this.hotelModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 1) {
                console.log(`Car with ID ${id} deleted successfully.`);
            } else {
                console.log(`Car with ID ${id} not found.`);
            }
        } catch (error) {
            console.error(`Error deleting car with ID ${id}:`, error);
        }
    }
      




    private async findHotel(id: string): Promise<hotel> {
        let org;
        try {
          org = await this.hotelModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find.');
        }
        if (!org) {
          throw new NotFoundException('Could not find. ');
        }
        return org;
      }
    }