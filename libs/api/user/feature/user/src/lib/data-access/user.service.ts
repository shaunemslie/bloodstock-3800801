import { Injectable } from '@nestjs/common';
import { PrismaClient, PrismaPromise, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  fetchUser(id: string): PrismaPromise<User> {
    return prisma.user.findFirst({
      where: {
        fireId: id,
      },
    });
  }

  createUser(body: { username: string; fireId: string }): PrismaPromise<User> {
    return prisma.user.create({
      data: body,
    });
  }
}
