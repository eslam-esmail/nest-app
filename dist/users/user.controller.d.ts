import { UserService } from './user.service.js';
import { createUser } from './dto/create-user.dto.js';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getHello(): string;
    checkExpection(): string;
    applyCustomPipe(id: BigInteger): string;
    create(userData: createUser): string;
}
