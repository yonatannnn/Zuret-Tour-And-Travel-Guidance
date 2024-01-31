import * as mongoose from 'mongoose'

export const restaurantSchema = new  mongoose.Schema({
    name : {type : String, required : true}, 
    location : {type : String, required : true},
    average_price : {type : Number, required : true},
    seats  : {type : Object, required : true},
    review : Object,
    imagePath : {type : String , required : true },
    imagePath1:{type: String, required:true}
});

export interface restaurant extends mongoose.Document{
    id : string;
    name : string;
    location : string;
    average_price : number;
    seats  : object
    review : object;
    imagePath : string;
    imagePath1:string;
}