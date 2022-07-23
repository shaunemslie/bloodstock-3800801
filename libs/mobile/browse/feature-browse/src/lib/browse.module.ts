import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowsePageComponent } from './browse.page';
import { BrowseRouting } from './browse.routing';
import { IonicModule } from '@ionic/angular';
import { ListingItemComponentModule } from '@bloodstock/mobile/shared/ui/listing-item';
import { ItemSectionComponentModule } from '@bloodstock/mobile/shared/ui/item-section';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BrowseRouting,
    ListingItemComponentModule,
    ItemSectionComponentModule,
  ],
  declarations: [BrowsePageComponent],
  exports: [BrowsePageComponent],
})
export class BrowseModule {}
