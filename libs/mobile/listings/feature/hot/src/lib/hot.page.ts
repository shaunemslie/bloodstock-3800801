import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bloodstock-hot-listings',
  templateUrl: './hot.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotListingsPageComponent {
  selectedSegment = 'listings';

  segmentChanged(e: any) {
    this.selectedSegment = e.detail.value;
  }
}
