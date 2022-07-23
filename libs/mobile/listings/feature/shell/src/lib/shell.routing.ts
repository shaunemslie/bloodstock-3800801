import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'hot',
    loadChildren: () =>
      import('@bloodstock/mobile/listings/feature/hot').then(
        (m) => m.HotListingsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@bloodstock/mobile/listings/feature/listings').then(
        (m) => m.ListingsModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsShellRouting {}
