import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@bloodstock/shared/interfaces';
import { AuthState, Logout } from '@bloodstock/mobile/shared/data-access/auth';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bloodstock-profile',
  templateUrl: './profile.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  @Select(AuthState.user) user$: Observable<User> | undefined | null;

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
