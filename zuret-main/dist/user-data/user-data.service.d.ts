import { Model } from 'mongoose';
import { LoginDto } from 'src/users/dto/login.dto';
import { signupDto } from 'src/users/dto/signup.dto';
import { User } from './users-data.model';
export declare class UserDataService {
    private readonly userdataModel;
    private readonly users;
    constructor(userdataModel: Model<User>);
    insertUser(signUpDto: signupDto): Promise<User & Required<{
        _id: string;
    }>>;
    findOne(email: any): Promise<User | undefined>;
    getUser(email: any): Promise<User & Required<{
        _id: string;
    }>>;
    delete_user(email: any): Promise<User | undefined>;
    get_user(email: any): Promise<User & Required<{
        _id: string;
    }>>;
    get_all_users(): Promise<(User & Required<{
        _id: string;
    }>)[]>;
    update_password(logindto: LoginDto): Promise<User | undefined>;
    createDefaultAdmin(signUpDto: signupDto): Promise<User>;
}
