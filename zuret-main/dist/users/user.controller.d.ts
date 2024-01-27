import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { signupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    addUser(signUpDto: signupDto): Promise<{
        msg: string;
        userId: any;
        userName: string;
    }>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    get_user(email: string): Promise<import("../user-data/users-data.model").User & Required<{
        _id: string;
    }>>;
    delete_user(email: string): Promise<import("../user-data/users-data.model").User>;
    getallusers(): Promise<(import("../user-data/users-data.model").User & Required<{
        _id: string;
    }>)[]>;
    gethotel(): {
        sign: string;
    };
    update_password(pass: LoginDto): Promise<import("../user-data/users-data.model").User>;
}
