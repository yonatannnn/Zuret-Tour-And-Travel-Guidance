import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { hotels } from "../hotels.enum";

export class getHotelFilterDto{

    @IsOptional()
    @IsIn([hotels.piasa,hotels.Bole])
hotels:hotels

  
}