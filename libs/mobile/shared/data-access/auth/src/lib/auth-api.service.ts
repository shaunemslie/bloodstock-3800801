import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User as prismaUser } from '@prisma/client';
import { Get, HttpApi, Post } from 'ngx-decorator';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@HttpApi('api')
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  @Get('user')
  getUser(params?: object): Observable<prismaUser> {
    return of();
  }

  @Post('user')
  createUser(params?: object, body?: object): Observable<prismaUser> {
    return of();
  }
}
