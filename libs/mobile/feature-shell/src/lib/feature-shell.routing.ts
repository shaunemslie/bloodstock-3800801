import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@bloodstock/mobile/shared/utils/auth';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@bloodstock/mobile/home/feature-home').then((m) => m.HomeModule),
  },
  {
    path: 'inbox',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@bloodstock/mobile/inbox/feature-inbox').then(
        (m) => m.InboxModule
      ),
  },
  {
    path: 'browse',
    children: [
      {
        path: 'listings',
        loadChildren: () =>
          import('@bloodstock/mobile/listings/feature/shell').then(
            (m) => m.ListingsShellModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('@bloodstock/mobile/browse/feature-browse').then(
            (m) => m.BrowseModule
          ),
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@bloodstock/mobile/auth/feature/shell').then(
        (m) => m.AuthShellModule
      ),
  },
  {
    path: '',
    redirectTo: 'browse',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class MobileShellRouting {}
