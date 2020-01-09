import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { cartAnimation } from '../../../animations/animations';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.scss'],
  animations: [cartAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCartComponent implements OnChanges {

  animate: boolean = false;

  @Input() totalOrderPrice: number;
  @Input() cartQuantity: number;

  @Output() goToCartRoute = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (this.cartQuantity > 0) {
      this.animate = !this.animate;
    }
  }

  handleNavigate() {
    this.goToCartRoute.emit();
  }
}
