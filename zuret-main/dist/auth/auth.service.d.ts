import { JwtService } from '@nestjs/jwt';
import { UserDataService } from 'src/user-data/user-data.service';
export declare class AuthService {
    private readonly usersDataService;
    private readonly jwtService;
    constructor(usersDataService: UserDataService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
