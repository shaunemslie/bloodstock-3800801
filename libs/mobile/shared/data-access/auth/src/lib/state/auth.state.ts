import { Injectable } from '@angular/core';
import { User as bsUser } from '@bloodstock/shared/interfaces';
import { User as prismaUser } from '@prisma/client';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserCredential } from 'firebase/auth';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';
import {
  Signup,
  Login,
  SetUser,
  GetUser,
  CreateUser,
  GoogleAuth,
  Logout,
  ClearUser,
} from './auth.actions';
import { Navigate } from '@ngxs/router-plugin';
import { AuthApiService } from '../auth-api.service';

export interface AuthStateModel {
  user: bsUser | undefined | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: undefined,
  },
})
@Injectable()
export class AuthState {
  @Selector() static user(state: AuthStateModel) {
    return state.user;
  }
  @Selector() static id(state: AuthStateModel) {
    return state.user?.id;
  }
  @Selector() static isAuthenticated(state: AuthStateModel) {
    return !!state.user;
  }

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService
  ) {}

  @Action(Signup)
  userSignup(ctx: StateContext<AuthStateModel>, action: Signup) {
    return this.authService.signup(action.payload).pipe(
      tap((credentials: UserCredential) => {
        ctx.dispatch([
          new CreateUser(action.payload.username, credentials.user),
          new Navigate(['/home']),
        ]);
      })
    );
  }

  @Action(Login)
  userLogin(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(
      tap((credentials: UserCredential) => {
        ctx.dispatch(new GetUser(credentials.user.uid, credentials.user));
      })
    );
  }

  @Action(Logout)
  userLogout(ctx: StateContext<AuthStateModel>) {
    return ctx.dispatch([new Navigate(['/browse']), new ClearUser()]);
  }

  @Action(GoogleAuth)
  googleLogin(ctx: StateContext<AuthStateModel>) {
    return this.authService.googleAuth().pipe(
      tap((credentials: UserCredential) => {
        ctx.dispatch(new GetUser(credentials.user.uid, credentials.user));
      })
    );
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<AuthStateModel>, action: CreateUser) {
    return this.authApiService
      .createUser(undefined, {
        username: action.payload,
        fireId: action.fireUser.uid,
      })
      .pipe(
        tap((user: prismaUser) => {
          ctx.dispatch([
            new SetUser({ prismaUser: user, fireUser: action.fireUser }),
            new Navigate(['/home']),
          ]);
        })
      );
  }

  @Action(GetUser)
  getUser(ctx: StateContext<AuthStateModel>, action: GetUser) {
    return this.authApiService.getUser({ id: action.payload }).pipe(
      tap((user: prismaUser) => {
        ctx.dispatch([
          new SetUser({ prismaUser: user, fireUser: action.fireUser }),
          new Navigate(['/home']),
        ]);
      })
    );
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, action: SetUser) {
    return ctx.setState({
      user: {
        email: action.payload.fireUser.email,
        displayName: action.payload.fireUser.displayName,
        photoURL: action.payload.fireUser.photoURL,
        emailVerified: action.payload.fireUser.emailVerified,
        ...action.payload.prismaUser,
      },
    });
  }

  @Action(ClearUser)
  clearUser(ctx: StateContext<AuthStateModel>) {
    return ctx.setState({
      user: null,
    });
  }
}
