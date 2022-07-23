import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HotListingsPageComponent } from './hot.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HotListingsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotListingsRouting {}
