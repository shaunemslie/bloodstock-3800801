import { Component, ChangeDetectionStrategy, NgModule, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'bloodstock-signup-form',
  templateUrl: './signup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent {
  submitted = false;
  signupForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  handleSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) this.formSubmit.emit(this.signupForm);
  }
}

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  declarations: [SignupFormComponent],
  exports: [SignupFormComponent],
})
export class SignupFormComponentModule {}
