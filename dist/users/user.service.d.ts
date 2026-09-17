import { Repository } from 'typeorm';
import { createUser } from './dto/create-user.dto.js';
import { Users } from './entities/user.entity.js';
import { updateUser } from './dto/update-user.dto.js';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<Users>);
    getHello(): string;
    checkExpection(): string;
    createUser(userData: createUser): Promise<any>;
    updateUser(id: number, userData: updateUser): Promise<Users | null>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
