import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Feed } from '@bloodstock/shared/interfaces';
import { Select, Store } from '@ngxs/store';
import { Observable, takeUntil, Subject } from 'rxjs';
import { LoadFeed, InitFeed } from './+state/home.actions';
import { HomeState } from './+state/home.state';
import { TakeUntilDestroy } from 'ngx-decorator';

@Component({
  selector: 'bloodstock-home',
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class HomePageComponent implements OnDestroy {
  skeletonCount = Array(6)
  private destroyed$!: Function;
  @Select(HomeState.listings) listings$: Observable<Feed[]> | undefined;

  constructor(private store: Store) {
    this.init();
  }

  refresh(event: any) {
    this.init()
      .pipe(takeUntil(this.destroyed$()))
      .subscribe(() => event.target.complete());
  }

  loadFeed(event: any) {
    this.store
      .dispatch(new LoadFeed())
      .pipe(takeUntil(this.destroyed$()))
      .subscribe(() => event.target.complete());
  }

  trackListings(index: number, listing: Feed): string {
    return listing.id;
  }

  private init(): Observable<unknown> {
    return this.store.dispatch(new InitFeed());
  }

  ngOnDestroy() {}
}
