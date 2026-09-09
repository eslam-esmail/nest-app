import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CustomValidationPipe } from './validations/validationLog.pipe.js';
import { createUser } from './dto/create-user.dto.js';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @Get()
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
}
