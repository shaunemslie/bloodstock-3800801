import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxPageComponent } from './inbox.page';
import { InboxRouting } from './inbox.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, InboxRouting, IonicModule],
  declarations: [InboxPageComponent],
  exports: [InboxPageComponent],
})
export class InboxModule {}
