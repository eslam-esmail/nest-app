import { UserService } from './user.service.js';
import { createUser } from './dto/create-user.dto.js';
import { updateUser } from './dto/update-user.dto.js';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getHello(): string;
    checkExpection(): string;
    applyCustomPipe(id: BigInteger): string;
    create(userData: createUser): Promise<any>;
    update(id: number, userData: updateUser): Promise<import("./entities/user.entity.js").Users | null>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
