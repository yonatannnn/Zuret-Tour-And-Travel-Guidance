import { UserDataService } from 'src/user-data/user-data.service';
import { LoginDto } from './dto/login.dto';
import { signupDto } from './dto/signup.dto';
export type User = any;
export declare class UsersService {
    private userDataService;
    private readonly users;
    constructor(userDataService: UserDataService);
    insertUser(signUpDto: signupDto): Promise<import("../user-data/users-data.model").User>;
    delete_user(email: string): Promise<import("../user-data/users-data.model").User>;
    update_password(loginDto: LoginDto): Promise<import("../user-data/users-data.model").User>;
    get_all_users(): Promise<(import("../user-data/users-data.model").User & Required<{
        _id: string;
    }>)[]>;
    get_user(email: string): Promise<import("../user-data/users-data.model").User & Required<{
        _id: string;
    }>>;
}
