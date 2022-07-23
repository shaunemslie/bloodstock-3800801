import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
@Component({
  selector: 'bloodstock-browse',
  templateUrl: './browse.page.html',
  styles: [
    `
      :host {
        .swiper-slide {
          width: 280px !important;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowsePageComponent {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private navCtrl: NavController) {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  navigate(route: string) {
    this.navCtrl.navigateForward(route);
  }
}
