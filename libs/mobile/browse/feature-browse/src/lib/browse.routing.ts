import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowsePageComponent } from './browse.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BrowsePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRouting {}
