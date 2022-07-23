import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsPageComponent } from './listings.page';
import { ListingsRouting } from './listings.routing';
import { IonicModule } from '@ionic/angular';
import { ListingItemComponentModule } from '@bloodstock/mobile/shared/ui/listing-item';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListingsRouting,
    ListingItemComponentModule,
  ],
  declarations: [ListingsPageComponent],
  exports: [ListingsPageComponent],
})
export class ListingsModule {}
