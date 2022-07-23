import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'bloodstock-item-section',
  templateUrl: './item-section.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSectionComponent {
  @Input() labelTpl?: TemplateRef<any>;
  @Input() label?: string;
  @Input() subHeading?: string;
  @Input() btnLabel?: string;

  @Output() btnClick = new EventEmitter();

  onClicked() {
    this.btnClick.emit();
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ItemSectionComponent],
  exports: [ItemSectionComponent],
})
export class ItemSectionComponentModule {}
