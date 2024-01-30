import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/users.service";


@Schema({
  timestamps: true
})
export class Booking {

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  hairStyle: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  comment: string;

  @Prop({type:mongoose.Schema.Types.ObjectId, ref:'user'})
  user:User;
  
}
export const BookingSchema = SchemaFactory.createForClass(Booking)