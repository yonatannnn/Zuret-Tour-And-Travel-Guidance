import * as mongoose from 'mongoose'

export const carOrgSchema = new  mongoose.Schema({
    name : {type : String, required : true}, 
    location : {type : String, required : true},
    average_price : {type : Number, required : true},
    cars  : {type : Object, required : true},
    review : Object,
    imagePath : {type : String , required : true }
});

export interface carOrg extends mongoose.Document{
    id : string;
    name : string;
    location : string;
    average_price : number;
    cars  : object
    review : object;
    imagePath : string;
}