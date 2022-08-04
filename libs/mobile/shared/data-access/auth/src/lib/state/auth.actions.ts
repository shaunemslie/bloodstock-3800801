import { User as fireUser } from 'firebase/auth';
import { User as prismaUser } from '@prisma/client';

export class Signup {
  static readonly type = '[Auth Signup] Signup User';
  constructor(public payload: { username: string, email: string, password: string }) {}
}

export class Login {
  static readonly type = '[Auth Login] Login User';
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout {
  static readonly type = '[Auth Login] Logout User';
  constructor() {}
}

export class GoogleAuth {
  static readonly type = '[Auth Login] GoogleAuth User';
}

export class CreateUser {
  static readonly type = '[Auth] Create User';
  constructor(public payload: string, public fireUser: fireUser) {}
}

export class GetUser {
  static readonly type = '[Auth] Get User';
  constructor(public payload: string, public fireUser: fireUser ) {}
}

export class SetUser {
  static readonly type = '[Auth] Set User';
  constructor(public payload: { prismaUser: prismaUser, fireUser: Partial<fireUser> }) {}
}

export class ClearUser {
  static readonly type = '[Auth] Clear User';
}
