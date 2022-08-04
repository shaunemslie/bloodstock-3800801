import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { delay, from, Observable } from 'rxjs';
import { UserService } from './data-access/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser(@Query('id') id: string): Observable<User> {
    return from(this.userService.fetchUser(id)).pipe(delay(2000));
  }

  @Post()
  createUser(
    @Body() body: { username: string; fireId: string }
  ): Observable<User> {
    return from(this.userService.createUser(body)).pipe(delay(2000));
  }
}
