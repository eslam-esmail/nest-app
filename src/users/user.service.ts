import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUser } from './dto/create-user.dto.js';
import { Users } from './entities/user.entity.js';
import { updateUser } from './dto/update-user.dto.js';

@Injectable()
export class UserService {

  constructor(@InjectRepository(Users) private readonly user: Repository<Users>) { }

  getHello(): string {
    return 'Hello from user';
  }
  checkExpection(): string {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
  async createUser(userData:createUser): Promise<any>{
    //console.log(userData);
    const newUser = this.user.create(userData);

    return await this.user.save(newUser);
  }
  async updateUser(id: number, userData: updateUser) {
    const user = this.user.findOne({ where: { id: id } })
    if (!user) {
      throw new NotFoundException;
    }
    return await this.user.save({...user, ...userData});
  }
  async deleteUser(id: number) {
    const user = this.user.findOne({ where: { id: id } })
    if (!user) {
      throw new NotFoundException;
    }
    return await this.user.delete(id);
  }
}
