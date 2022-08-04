import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Feed } from '@bloodstock/shared/interfaces';
import { Select, Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { LoadFeed, InitFeed } from './+state/home.actions';
import { HomeState } from './+state/home.state';
import { TakeUntilDestroy } from 'ngx-decorator';
import { AuthState } from '@bloodstock/mobile/shared/data-access/auth';

@Component({
  selector: 'bloodstock-home',
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class HomePageComponent implements OnInit, OnDestroy {
  skeletonCount = Array(6);
  private id: string | undefined;
  private componentDestroy!: Function;
  @Select(AuthState.id) id$: Observable<string> | undefined;
  @Select(HomeState.listings) listings$: Observable<Feed[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.id$?.pipe(takeUntil(this.componentDestroy())).subscribe((id) => {
      this.id = id;
      this.init();
    });
  }

  refresh(event: any) {
    this.init()
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(() => event.target.complete());
  }

  loadFeed(event: any) {
    this.store
      .dispatch(new LoadFeed({ id: this.id }))
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(() => event.target.complete());
  }

  trackListings(_index: number, listing: Feed): string {
    return listing.id;
  }

  private init(): Observable<unknown> {
    return this.store.dispatch(new InitFeed({ id: this.id }));
  }

  ngOnDestroy() {}
}
