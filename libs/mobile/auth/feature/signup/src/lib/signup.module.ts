import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup.page';
import { SignupRouting } from './signup.routing';
import { IonicModule } from '@ionic/angular';
import { SignupFormComponentModule } from '@bloodstock/mobile/auth/ui/signup-form';

@NgModule({
  imports: [CommonModule, SignupRouting, IonicModule, SignupFormComponentModule],
  declarations: [SignupPageComponent],
  exports: [SignupPageComponent],
})
export class SignupModule {}
