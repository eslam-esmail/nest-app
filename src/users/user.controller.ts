import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CustomValidationPipe } from './validations/validationLog.pipe.js';
import { createUser } from './dto/create-user.dto.js';
import { role } from './guards/role.decorator.js';
import { updateUser } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @Get()
  @role(["user"])
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('/test-expection')
  checkExpection(): string {
    return this.userService.checkExpection();
  }

  @Get(':id')
  applyCustomPipe(@Param('id', CustomValidationPipe) id: BigInteger): string {
    return "this value after apply pipe " + id;
  }

  @Post()
  create(@Body() userData:createUser) {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  update(@Param('id', CustomValidationPipe) id:number, @Body() userData:updateUser) {
    return this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  delete(@Param('id', CustomValidationPipe) id:number) {
    return this.userService.deleteUser(id);
  }
}
