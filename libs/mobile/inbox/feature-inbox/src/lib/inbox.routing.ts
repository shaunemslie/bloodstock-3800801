import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InboxPageComponent } from './inbox.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InboxPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRouting {}
