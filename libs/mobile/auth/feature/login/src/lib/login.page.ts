import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleAuth, Login } from '@bloodstock/mobile/shared/data-access/auth';
import { Store } from '@ngxs/store';

@Component({
  selector: 'bloodstock-login',
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private store: Store) {}

  login(loginForm: FormGroup) {
    this.store.dispatch(new Login(loginForm.value));
  }

  googleAuth() {
    this.store.dispatch(new GoogleAuth());
  }
}
