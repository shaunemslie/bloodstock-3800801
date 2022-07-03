import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch } from '@ngxs/store/operators';

import { HomeService } from '../home.service';
import { InitFeed, LoadFeed } from './home.actions';
import { Feed } from '@bloodstock/shared/interfaces';

export interface HomeStateModel {
  listings: Feed[] | undefined;
}

@State<HomeStateModel>({
  name: 'feed',
  defaults: {
    listings: undefined,
  },
})
@Injectable()
export class HomeState {
  @Selector() static listings(state: HomeStateModel) {
    return state.listings;
  }

  constructor(private homeService: HomeService) {}

  @Action(InitFeed)
  initFeed(ctx: StateContext<HomeStateModel>) {
    return this.homeService.fetchFeed('cl52l17bi0020itsek1p4nt2g').pipe(
      tap((listings: Feed[]) => {
        ctx.setState({
          listings: listings
        });
      })
    );
  }

  @Action(LoadFeed)
  loadFeed(ctx: StateContext<HomeStateModel>) {
    return this.homeService.fetchFeed('cl52l17bi0020itsek1p4nt2g').pipe(
      tap((listings: Feed[]) => {
        ctx.setState(
          patch({
            listings: append(listings),
          })
        );
      })
    );
  }
}
