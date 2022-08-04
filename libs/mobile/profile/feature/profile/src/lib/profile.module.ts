import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile.page';
import { ProfileRouting } from './profile.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, ProfileRouting, IonicModule],
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent],
})
export class ProfileModule {}
