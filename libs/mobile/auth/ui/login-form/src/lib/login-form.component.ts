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
import { tap } from 'rxjs/operators';

@Component({
  selector: 'bloodstock-login-form',
  templateUrl: './login-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  submitted = false;
  loginForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  handleSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) this.formSubmit.emit(this.loginForm);
  }
}

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormComponentModule {}
