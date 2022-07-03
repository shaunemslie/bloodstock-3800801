import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxPageComponent } from './inbox.page';

@NgModule({
  imports: [CommonModule],
  declarations: [InboxPageComponent],
  exports: [InboxPageComponent],
})
export class InboxModule {}
