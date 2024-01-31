import { Module } from '@nestjs/common';
import { TouristSiteController } from './touristSite.controller';
import { TouristSiteService } from './touristSite.service';
import { MongooseModule } from '@nestjs/mongoose';
import { touristSiteSchema } from './touristSite.model';

@Module({
  imports : [MongooseModule.forFeature([{name : 'touristSite' , schema : touristSiteSchema}])],
  controllers: [TouristSiteController],
  providers: [TouristSiteService]
})
export class TouristSiteModule {}
