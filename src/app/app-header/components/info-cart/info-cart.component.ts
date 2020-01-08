import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCartComponent {

  @Input() totalOrderPrice: number;
  @Input() cartQuantity: number;

  @Output() goToCartRoute = new EventEmitter();

  handleNavigate() {
    this.goToCartRoute.emit();
  }
}
