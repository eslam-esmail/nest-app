import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard.js';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
    , UserService
  ],
})
export class UserModule {}
