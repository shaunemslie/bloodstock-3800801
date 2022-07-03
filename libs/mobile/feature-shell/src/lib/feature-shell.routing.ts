import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@bloodstock/mobile/home/feature-home').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('@bloodstock/mobile/browse/feature-browse').then(
        (m) => m.BrowseModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class MobileShellRouting {}
