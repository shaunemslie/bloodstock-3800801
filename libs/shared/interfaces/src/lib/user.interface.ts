import { User as prismaUser } from '@prisma/client';
import { User as fireUser } from "firebase/auth";

export interface User extends prismaUser, Partial<fireUser> {}
