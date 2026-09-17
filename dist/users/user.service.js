var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity.js';
let UserService = class UserService {
    user;
    constructor(user) {
        this.user = user;
    }
    getHello() {
        return 'Hello from user';
    }
    checkExpection() {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    async createUser(userData) {
        const newUser = this.user.create(userData);
        return await this.user.save(newUser);
    }
    async updateUser(id, userData) {
        const user = this.user.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException;
        }
        return await this.user.save({ ...user, ...userData });
    }
    async deleteUser(id) {
        const user = this.user.findOne({ where: { id: id } });
        if (!user) {
            throw new NotFoundException;
        }
        return await this.user.delete(id);
    }
};
UserService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Users)),
    __metadata("design:paramtypes", [Repository])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map