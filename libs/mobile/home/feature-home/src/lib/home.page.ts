import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Feed } from '@bloodstock/shared/interfaces';
import { Select, Store } from '@ngxs/store';
import { Observable, lastValueFrom } from 'rxjs';
import { LoadFeed, InitFeed } from './+state/home.actions';
import { HomeState } from './+state/home.state';

@Component({
  selector: 'bloodstock-home',
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  arr = Array(6);
  @Select(HomeState.listings) listings$: Observable<Feed[]> | undefined;

  constructor(private store: Store) {
    this.init();
  }

  async loadFeed(e: any) {
    await lastValueFrom(this.store.dispatch(new LoadFeed())).then(() => e.target.complete());
  }

  async refresh(e: any) {
    await lastValueFrom(this.init()).then(() => e.target.complete());
  }

  init(): Observable<unknown> {
    return this.store.dispatch([new InitFeed()]);
  }

  trackListings(index: number, listing: Feed): string {
    return listing.id;
  }
}
