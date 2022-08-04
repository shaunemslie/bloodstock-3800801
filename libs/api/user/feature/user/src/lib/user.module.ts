import { Module } from '@nestjs/common';
import { UserService } from './data-access/user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
