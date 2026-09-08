import { UserService } from './user.service.js';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getHello(): string;
}
