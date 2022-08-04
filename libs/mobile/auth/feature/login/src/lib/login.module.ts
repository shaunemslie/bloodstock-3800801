import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login.page';
import { LoginRouting } from './login.routing';
import { IonicModule } from '@ionic/angular';
import { LoginFormComponentModule } from 'libs/mobile/auth/ui/login-form/src';
@NgModule({
  imports: [CommonModule, LoginRouting, IonicModule, LoginFormComponentModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginModule {}
