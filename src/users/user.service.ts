import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUser } from './dto/create-user.dto.js';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello from user';
  }
  checkExpection(): string {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
  createUser(userData:any) {
    console.log(userData);
    return "data saved sucessfully";
  }
}
