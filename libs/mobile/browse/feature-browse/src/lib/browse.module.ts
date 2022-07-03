import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowsePageComponent } from './browse.page';
import { BrowseRouting } from './browse.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, BrowseRouting],
  declarations: [BrowsePageComponent],
  exports: [BrowsePageComponent],
})
export class BrowseModule {}
