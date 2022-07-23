import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from './state/auth.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([AuthState])],
})
export class AuthModule {}
