import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthState } from '@bloodstock/mobile/shared/data-access/auth';
import { filter, map, Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '@bloodstock/shared/interfaces';

@Component({
  selector: 'bloodstock-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentRoute = '/';
  @Select(AuthState.user) user$: Observable<User> | undefined | null;

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
