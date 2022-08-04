import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.page';
import { HomeRouting } from './home.routing';
import { IonicModule } from '@ionic/angular';
import { ListingItemComponentModule } from '@bloodstock/mobile/shared/ui/listing-item';
import { NgxsModule } from '@ngxs/store';
import { HomeState } from './+state/home.state';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    IonicModule,
    NgxsModule.forFeature([HomeState]),
    ListingItemComponentModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomeModule {}
