import { Controller, Get,Post,Put, Delete,Param,Body, UseInterceptors, BadRequestException, UploadedFile, Res, Patch, Query, ValidationPipe} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRestaurantDto} from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './interfaces/restaurant.interface';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { getRestaurantFilterDto } from './dto/filter-restaurant.dto';



@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantService:RestaurantsService){}
    
    @Get()
    getHotels(@Query(ValidationPipe) filterDto:getRestaurantFilterDto):Promise<Restaurant[]>{
        console.log(filterDto)
        return this.restaurantService.getRestauranta(filterDto)

    }
    @Get(':id')
    getOne(@Param('id') id):Promise<Restaurant>{
        return this.restaurantService.getOne(id);

    }
    @Patch(':id')
    update(@Body() updateRestaurantDto:CreateRestaurantDto,@Param('id') id):Promise<Restaurant>{
        return this.restaurantService.update(id,updateRestaurantDto)
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Restaurant>{
        return this.restaurantService.delete(id)
    }
    @Delete()
    deleteAll():Promise<any>{
        return this.restaurantService.deleteAll()
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination:"./uploads",
            filename:(req,file,cb) => {
                const name = file.originalname.split('.')[0]
                const fileExtension = file.originalname.split('.')[1]
                const newFileName = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension

                cb(null, newFileName)
            }
        }),
        fileFilter: (req,file,cb)=>{
            if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
                return cb(null,false)

            }
            cb(null,true)

        }
    }))

    uploadData( @Body() restaurantDTO:CreateRestaurantDto,@UploadedFile('file') file:Express.Multer.File){
        if (!file){
            throw new BadRequestException("File is not appropriate")
        } else {

            const filePathURL = `http://localhost:3000/restaurants/viewImage/${file.filename}`
            this.restaurantService.create(restaurantDTO,filePathURL)
        }
    }
    @Get('viewImage/:filename')
    async viewTheFile(@Param('filename') filename, @Res() res:Response): Promise<void> {
        return await res.sendFile(filename,{root: './uploads'})
    } 

    

}
