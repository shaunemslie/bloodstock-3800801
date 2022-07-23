import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';

export interface AuthStateModel {
  isAuthenticated: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
  },
})
@Injectable()
export class AuthState {
  @Selector() static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }
}
