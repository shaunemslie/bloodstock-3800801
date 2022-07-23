import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupPageComponent } from './signup.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignupPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRouting {}
