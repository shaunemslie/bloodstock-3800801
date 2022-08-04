import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'bloodstock-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  handleSubmit() {
    if (this.loginForm.valid) this.formSubmit.emit(this.loginForm);
  }
}

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormComponentModule {}
