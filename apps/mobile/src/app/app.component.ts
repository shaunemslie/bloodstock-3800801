import { Component, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthState } from '@bloodstock/mobile/shared/data-access/auth';
import { filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'bloodstock-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentRoute = '/';
  @Select(AuthState.isAuthenticated) isAuthenticated$:
    | Observable<boolean>
    | undefined;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => {
          return event.url;
        })
      )
      .subscribe((url: string) => {
        this.currentRoute = url;
      });
  }
}
