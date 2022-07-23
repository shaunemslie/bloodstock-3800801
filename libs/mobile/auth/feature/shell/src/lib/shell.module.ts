import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthShellRouting } from './shell.routing';

@NgModule({
  imports: [CommonModule, AuthShellRouting],
})
export class AuthShellModule {}
