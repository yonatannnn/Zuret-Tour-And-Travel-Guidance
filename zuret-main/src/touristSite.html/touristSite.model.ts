import * as mongoose from 'mongoose'

export const touristSiteSchema = new  mongoose.Schema({
    name : {type : String, required : true}, 
    location : {type : String, required : true},
    imagePath : {type : String , required : true }
});

export interface touristSite extends mongoose.Document{
    id : string;
    name : string;
    location : string;
    imagePath : string;
}