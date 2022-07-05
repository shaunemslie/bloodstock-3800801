import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feed } from '@bloodstock/shared/interfaces';
import { debounceTime, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  readonly apiUrl = 'http://192.168.1.99:4200/api';

  constructor(private http: HttpClient) {}

  fetchFeed(id: string): Observable<Feed[]> {
    const params = new HttpParams().append('id', id);
    return this.http
      .get<Feed[]>(`${this.apiUrl}/feed`, { params: params })
      .pipe(debounceTime(600), retry(3));
  }
}
