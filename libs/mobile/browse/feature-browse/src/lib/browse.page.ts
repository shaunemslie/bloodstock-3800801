import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'bloodstock-browse',
  templateUrl: './browse.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowsePageComponent {
  @ViewChild(IonModal) modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}

