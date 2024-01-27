import * as mongoose from "mongoose"





export const UserDataSchema = new mongoose.Schema(
  {
    
    fullname: {
      type: String,
      required: true,
     
      
    },
    country: {
      type: String,
      required: true,
      
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
    ,
  role: {
      type: String,
  }
}
  ,{ timestamps: true }
)

export interface User extends mongoose.Document {
  _id: string;
  fullname: string;
  country: string;
  email: string;
  password: string;
  
}