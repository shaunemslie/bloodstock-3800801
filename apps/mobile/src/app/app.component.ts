import { Component } from '@angular/core';

@Component({
  selector: 'bloodstock-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selected!: string;

  constructor() {}

  setTab(e: any) {
    this.selected = e.tab;
  }
}
