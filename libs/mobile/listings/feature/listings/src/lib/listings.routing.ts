import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListingsPageComponent } from './listings.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListingsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRouting {}
