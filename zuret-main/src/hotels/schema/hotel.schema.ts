import * as mongoose from 'mongoose';
export const HotelSchema =new mongoose.Schema({
    name: {
            type: String,
            required: [true, 'A hotel must have a name'],  
        },
    picturePath:String,
    location:{
            type: String,
            required: [true, 'A hotel must have a location']},
    starStat:{
                type: Number,
                required: [true, 'A hotel must have a starStatus']},
    roomPrice:{
        type: Number,
        required: [true, 'A hotel must have an average price']}

})

