import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'bloodstock-listings',
  templateUrl: './listings.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsPageComponent {
  @ViewChild(IonModal) filtersModal!: IonModal;

  dismissFilters() {
    this.filtersModal.dismiss(null, 'cancel');
  }
}
