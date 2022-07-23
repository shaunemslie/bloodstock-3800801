import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bloodstock-login',
  templateUrl: './login.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  login(loginForm: FormGroup) {
    console.log(loginForm);
  }
}
