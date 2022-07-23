import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthState } from '@bloodstock/mobile/shared/data-access/auth';
import { Select } from '@ngxs/store';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticated$.pipe(
      tap((val) => {
        if (val === false) this.router.navigate(['browse']);
        return this.isAuthenticated$;
      })
    );
  }
}
