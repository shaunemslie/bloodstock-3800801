import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feed } from '@bloodstock/shared/interfaces';
import { Observable, of } from 'rxjs';
import { HttpApi, Get } from 'ngx-decorator';

@Injectable({
  providedIn: 'root',
})
@HttpApi('api')
export class HomeApiService {
  constructor(private httpClient: HttpClient) {}

  @Get('feed')
  getFeed(params?: object): Observable<Feed[]> {
    return of();
  }
}
