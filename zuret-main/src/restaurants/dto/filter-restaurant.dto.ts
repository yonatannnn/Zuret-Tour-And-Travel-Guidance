import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { restaurants } from "../restaurants.enum";

export class getRestaurantFilterDto{

    @IsOptional()
    @IsIn([restaurants.Esat,restaurants.kurt])
restaurants:restaurants

  
}