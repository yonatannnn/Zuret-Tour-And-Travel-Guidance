import * as mongoose from 'mongoose'

export const hotelSchema = new  mongoose.Schema({
    name : {type : String, required : true}, 
    location : {type : String, required : true},
    average_price : {type : Number, required : true},
    rooms  : {type : Object, required : true},
    review : Object,
    starStat: {type : Number, required : true},
    imagePath : {type : String , required : true }
});

export interface hotel extends mongoose.Document{
    id : string;
    name : string;
    location : string;
    average_price : number;
    rooms  : object
    review : object;
    imagePath : string;
    starStat:number;
}