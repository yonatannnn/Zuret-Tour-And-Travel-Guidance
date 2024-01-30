import { IsEmpty } from "class-validator"
import { User } from "src/users/users.service"


export class CreateBookDto {
  readonly fullName: string
  readonly email: string
  readonly hairStyle: string
  readonly date: string
  readonly time: string
  readonly comment: string
  @IsEmpty({message:"You can't book"})
  readonly user:User;
}