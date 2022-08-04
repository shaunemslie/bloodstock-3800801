import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProfilePageComponent } from './profile.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRouting {}
