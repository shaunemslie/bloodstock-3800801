import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Signup } from '@bloodstock/mobile/shared/data-access/auth';
import { Store } from '@ngxs/store';

@Component({
  selector: 'bloodstock-signup',
  templateUrl: './signup.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent {
  constructor(private store: Store) {}

  signup(signupForm: FormGroup) {
    this.store.dispatch(new Signup(signupForm.value));
  }
}
