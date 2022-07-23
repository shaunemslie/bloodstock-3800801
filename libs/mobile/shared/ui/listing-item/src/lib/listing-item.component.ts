import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feed } from '@bloodstock/shared/interfaces';
import { IonicModule } from '@ionic/angular';
import { NgxViewerModule } from 'ngx-viewer';
import { NgPipesModule } from 'ngx-pipes';

@Component({
  selector: 'bloodstock-listing-item',
  templateUrl: './listing-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingItemComponent {
  @Input() data!: Feed | undefined;

  toDate(val: string | Date | null): Date | undefined {
    if (val) return new Date(val);
    return;
  }
}

@Component({
  selector: 'bloodstock-listing-item-skeleton',
  templateUrl: 'skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingItemSkeletonComponent {
  arr = Array(8);
}

@NgModule({
  imports: [CommonModule, IonicModule, NgxViewerModule, NgPipesModule],
  declarations: [ListingItemComponent, ListingItemSkeletonComponent],
  exports: [ListingItemComponent, ListingItemSkeletonComponent],
})
export class ListingItemComponentModule {}
