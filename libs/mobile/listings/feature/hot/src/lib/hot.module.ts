import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotListingsPageComponent } from './hot.page';
import { HotListingsRouting } from './hot.routing';
import { IonicModule } from '@ionic/angular';
import { ListingItemComponentModule } from '@bloodstock/mobile/shared/ui/listing-item';
import { ItemSectionComponentModule } from '@bloodstock/mobile/shared/ui/item-section';

@NgModule({
  imports: [CommonModule, IonicModule, HotListingsRouting, ListingItemComponentModule, ItemSectionComponentModule],
  declarations: [HotListingsPageComponent],
  exports: [HotListingsPageComponent],
})
export class HotListingsModule {}
