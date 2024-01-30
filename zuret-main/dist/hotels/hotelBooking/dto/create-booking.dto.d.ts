import { User } from "src/users/users.service";
export declare class CreateBookDto {
    readonly fullName: string;
    readonly email: string;
    readonly hairStyle: string;
    readonly date: string;
    readonly time: string;
    readonly comment: string;
    readonly user: User;
}
